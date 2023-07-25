import { useState, useContext, useEffect } from "react";

// import { AuthContext } from "../contexts/AuthContext";
import SessionManager from "../files/SessionManager";
import { axiosPrivate } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/BusinessDataContext";




const useFetch = (url) => {

    const [data, setData] = useState([]);
    const {setPending} = useContext(DataContext);

    
    const { setLoggedIn } = useContext(AuthContext);    



  

    useEffect(() => {



        const getData = async () => {


            const emptyData = [];

            let token = SessionManager.getToken();

            

            try {

                let res = await axiosPrivate.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    
                });

                setPending(true);

               console.log(res);

                if(res.status === 200){
                    setData(res.data);    
                    setPending(false);               
                    
                }else if(res.status === 204){
                    
                    setData(emptyData);
                    setPending(false);               

                    
                }else if(res.status === 401){
                    
                    SessionManager.removeUserSession();                  
                    
                }
                else{
                    throw Error("Could not fetch the data for that resource");
                }

                
            } catch (error) {
                console.log(error);
                setPending(false);               
                

                let msg;


    
                if(error.response.status === 400){
                
                    msg =  error.response.data.Message; 
                    return msg;             
                }

                if(error.code === "ERR_BAD_REQUEST"){

                    setLoggedIn(false);
                    
                    SessionManager.removeUserSession();

                    msg =  error.response.data.Message; 
                    return msg;   
                                
                }

                if(error.response.status === 401){

                    setLoggedIn(false);
                    SessionManager.removeUserSession();
                    
                    msg =  "User not authorized. Please provide the correct credential"; 
                    return msg;   
                                
                }

                if(error.response.status === 403){

                    setLoggedIn(false);   
                    SessionManager.removeUserSession();

                    
                    msg =  "User forbidden to view this page. Please provide the correct credential"; 
                    return msg; 


                }

                if(error.response.status === 404){
                
                    msg =  "This page can not be found"; 
                    return msg; 
                    
                }

                if(error.response.status === 500){
                    
                    msg =  "This is an invalid request"; 
                    return msg; 
                    
                }

                if(error.response.status === 503 || error.code === "ERR_NETWORK"){
                
                    msg =  "Inconsistent network !!!"; 
                    return msg;
                    
                }
                
            }

            
    
        }

        getData();

    }, [setData, url, setLoggedIn, setPending]);

   return {data};
    
}

export default useFetch;