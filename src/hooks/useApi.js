import { useContext, useState } from "react";
import { axiosPrivate } from "../api/axios";
import SessionManager from "../files/SessionManager";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import useError from "./useError";




const useApi = () => {

    const { setLoggedIn } = useContext(AuthContext);
    const [open2fa, setOpen2fa] = useState(false);
    const [twoFaEmail, setTwoFaEmail] = useState("");
    const { message, setMessage, setModalOpen, setPending } = useContext(DataContext);

    const { authErrorHandler, dataErrorHandler } = useError();

    const [authMessage, setAuthMessage] = useState("");
    

    

    


    const registerStaff = async (data) => {
        
        try {

            const token = SessionManager.getToken();

            let res = await axiosPrivate.post("/access-auth/business/admin/create-staff", 
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },  
                    
                    withCredentials: true                 
                }
            );

            console.log(res);

            if(res.status === 200){
               
                setMessage({...message, body: res.data.Message, type: res.data.StatusType });
                setModalOpen(true);

            }





            
        } catch (error) {

            let msg = dataErrorHandler(error, "Staff", true);
            setAuthMessage(msg);

            
        }
    }



    const adminLogin = async (data) => {

        try {
            
            let res = await axiosPrivate.post("/access-auth/business/admin-login", 
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' }, 

                }
                
            );
                

            if(res.status === 200){
                console.log(res);

                setOpen2fa(res.data.Is2fa);
             
                setTwoFaEmail(res.data.Email);
                
            }
          


        } catch (error) {

           let msg = authErrorHandler(error);
           setAuthMessage(msg);
        }
        
    }


    const admin2FaLogin = async (data) => {

        try {

                       
            let res = await axiosPrivate.post("/access-auth/business/admin-login-2FA", 
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' }, 

                }
                
                
                
            )
                

            if(res.status === 200){
            
                setLoggedIn(res.data.IsAuth); 


                const userName = `${res.data.User.FirstName} ${res.data.User.LastName}`
                SessionManager.setUserSession(res.data.Token, res.data.User.UserId, res.data.IsAuth, res.data.Role[0], userName);

                // setTimeout(() => {
                                 
                    
                // }, [3000]);
                
                
            }


        } catch (error) {

            let msg = authErrorHandler(error);

            setAuthMessage(msg);
        }
        
    }


    const adminChangePassword = async (data) => {

        try {

            const token = SessionManager.getToken();
            const user = SessionManager.getUser();

            let res = await axiosPrivate.post(`/access-auth/business/admin/profile/${user}/change-password`, 
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },  
                    
                    withCredentials: true                 
                }
            );
            
           

            if(res.status === 200){
                
                console.log(res);

                if(res.status === 200){
               
                    setMessage({...message, body: res.data.Message, type: res.data.StatusType });
                    setModalOpen(true);
    
                }
                
                
            }


        } catch (error) {

           let msg = dataErrorHandler(error);
           setAuthMessage(msg);
        }
        
    }


    const addAdminAddress = async (data, id) => {

        try {

            // console.log(data);

            const token = SessionManager.getToken();
            

            let res = await axiosPrivate.put(`/access-auth/business/admin/profile/${id}/update-address`, 
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },  
                    
                    withCredentials: true                 
                }
            );
            
           

            if(res.status === 200){
                
                console.log(res);

                if(res.status === 200){
               
                    setMessage({...message, body: res.data.Message, type: res.data.StatusType });
                    setModalOpen(true);
    
                }
                
                
            }


        } catch (error) {

            let msg = dataErrorHandler(error);
            setAuthMessage(msg);
        }
        
    }



    const userLogin = async (data) => {

        try {
            
            let res = await axiosPrivate.post("/api/account/login", 
                JSON.stringify(data));

            if(res.status === 200){
                console.log(res);
                setMessage({...message, body: res.data.Message[0], type: "success" });

                setTimeout(() => {
                    setLoggedIn(res.data.IsAuth); 
                    SessionManager.setUserSession(res.data.Token, res.data.FirstName, res.data.UserId, res.data.IsAuth)              
                    
                }, [3000]);
                
                
            }







        } catch (error) {

            
            setLoggedIn(false);
            console.log(error)


            // if(error.response.status === 400){
            //     setMessageOpen(true);
            //     setMessage({...message, body: error.response.data.Message[0], type: "error" });                
            // }
            // if(error.response.status === 401){
                
            //     setMessageOpen(true);
            //     setMessage({...message, body: "User does not exist. Please provide the correct email and password", type: "error" });
                
            // }
            // if(error.response.status === 404){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "User does not exist. Please provide the correct email and password", type: "error" });
                
            // }
            // if(error.response.status === 500){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "Incorrect email or password combination !!!", type: "error" });
               
            // }

            // if(error.response.status === 503){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "Inconsistent network !!!", type: "error" });
               
            // }
        }
        
    }

  


    const userRegister = async (data) => {
        
        try {

            let res = await axiosPrivate.post("/api/account/register", 
                JSON.stringify(data),
                {
                    headers: {'Content-Type': 'application/json'},                   
                }
            );


            if(res.status === 200){

                setLoggedIn(res.data.IsAuth);  
                SessionManager.setUserSession(res.data.Token, res.data.FirstName, res.data.UserId)
                localStorage.setItem("logIn", JSON.stringify(res.data.IsAuth));
                
                setMessage({...message, body: res.data.Message[0], type: "success" });

            }





            
        } catch (error) {

            localStorage.setItem("logIn", false);
            setLoggedIn(false);
            console.log(error)


            // if(error.response.status === 400){
            //     setMessageOpen(true);
            //     setMessage({...message, body: error.response.data.Message[0], type: "error" });                
            // }
            // if(error.response.status === 401){
                
            //     setMessageOpen(true);
            //     setMessage({...message, body: "User does not exist. Please provide the correct email and password", type: "error" });
                
            // }
            // if(error.response.status === 404){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "User does not exist. Please provide the correct email and password", type: "error" });
                
            // }
            // if(error.response.status === 500){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "Incorrect email or password combination !!!", type: "error" });
               
            // }

            // if(error.response.status === 503){
            //     setMessageOpen(true);
            //     setMessage({...message, body: "Inconsistent network !!!", type: "error" });
               
            // }
            
        }
    }


    const logout = async () => {
        

        try {
            
            let res = await axiosPrivate.get("/api/account/logout");

            console.log(res);

            if(res.status === 200){

                setLoggedIn(res.data.IsAuth);   
                SessionManager.removeUserSession();            
                localStorage.removeItem("logIn");
            }





        } catch (error) {
            setLoggedIn(false);            
            localStorage.removeItem("logIn");
        }
        
        
    }

    const adminLogout = async () => {
        

        try {
            
            let res = await axiosPrivate.get("/access-auth/business/admin/logout");

          
            if(res.status === 200){

                setLoggedIn(res.data.IsAuth);   
                SessionManager.removeUserSession();            
                
            }


        } catch (error) {
            setLoggedIn(false);            
            SessionManager.removeUserSession();            

        }
        
        
    }



    const createProduct = async (data) => {

        try {

            const token = SessionManager.getToken();
            const user = SessionManager.getUser();
    
    
            
            const imageData = new FormData();

            
            imageData.append('file', data.data);
            imageData.append('upload_preset', "skol-stained-glass");
            imageData.append('cloud_name', "greenietec");


            let imgRes = await axiosPrivate.post("https://api.cloudinary.com/v1_1/greenietec/image/upload", imageData);

            if(imgRes.status === 200){



                const prdtData = {

                    productName: data.productName,
                    description: data.description,
                    quantity: data.quantity,
                    unitPrice: parseFloat(data.unitPrice),
                    productSlug: data.slug,
                    id: user,
                    publicId: imgRes.data.public_id,
                    secureUrl: imgRes.data.secureUrl,
                    url: imgRes.data.url,
                    dimensions: data.dimensions

                };

    
    
                let res = await axiosPrivate.post(`access-auth/business/admin/${user}/products/add-product`,                 
                    
                    JSON.stringify(prdtData),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        withCredentials: true
                    }
                    
                );

                setPending(false);
                console.log(res);
        
                if(res.status === 200){
                    

                    setPending(false);
                    setMessage({...message, body: res.data.Message, type: res.data.StatusType });
                    setModalOpen(true);

                    
        
                }




            }


            
        } catch (error) {

            setPending(false);

            let msg = dataErrorHandler(error, "product", true);

            setMessage({...message, body: msg, type: "error" });
            setModalOpen(true);

            
            
        }








    }


    const editProduct = async (data) => {

        try {

            const token = SessionManager.getToken();
            const user = SessionManager.getUser();
    
    
            
            const imageData = new FormData();

            
            imageData.append('file', data.data);
            imageData.append('upload_preset', "skol-stained-glass");
            imageData.append('cloud_name', "greenietec");


            let imgRes = await axiosPrivate.post("https://api.cloudinary.com/v1_1/greenietec/image/upload", imageData);

            if(imgRes.status === 200){



                const prdtData = {

                    productName: data.productName,
                    description: data.description,
                    quantity: data.quantity,
                    unitPrice: parseFloat(data.unitPrice),
                    productSlug: data.slug,
                    id: user,
                    publicId: imgRes.data.public_id,
                    secureUrl: imgRes.data.secureUrl,
                    url: imgRes.data.url,
                    dimensions: data.dimensions

                };

    
    
                let res = await axiosPrivate.post(`access-auth/business/admin/${user}/products/add-product`,                 
                    
                    JSON.stringify(prdtData),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        withCredentials: true
                    }
                    
                );

                setPending(false);
                console.log(res);
        
                if(res.status === 200){
                    

                    setPending(false);
                    setMessage({...message, body: res.data.Message, type: res.data.StatusType });
                    setModalOpen(true);

                    
        
                }




            }


            
        } catch (error) {

            setPending(false);

            let msg = dataErrorHandler(error, "product", true);

            setMessage({...message, body: msg, type: "error" });
            setModalOpen(true);

            
            
        }








    }



    return { 
        userLogin, 
        logout, 
        userRegister, 
        adminLogin, 
        admin2FaLogin,
        adminLogout, 
        registerStaff, 
        message, 
        open2fa, 
        setOpen2fa,
        twoFaEmail, 
        setTwoFaEmail,
        adminChangePassword,
        addAdminAddress,
        authMessage,
        createProduct,
        editProduct
    }

}

export default useApi;