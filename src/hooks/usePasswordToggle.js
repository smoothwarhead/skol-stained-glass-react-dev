import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';





const usePasswordToggle = () => {

    const location = useLocation();   
  
    const [visible, setVisibility] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if(location.pathname.includes("access-auth/business/account")){
        setIsDark(true);
        }
        else{
        setIsDark(false);
        }
    }, [location, setIsDark]);

    const handleVisibility = (e) => {
        
        setVisibility(!visible)
    }




    const Icon = (
        visible ? 
            <FaEyeSlash 
                className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'} 
                name=''
                onClick={handleVisibility}
            /> 
            : 
            <FaEye 
                className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'}  
                onClick={handleVisibility}
            />
    );


    // const Icon = () => {
    //     if(visible){
    //         <FaEyeSlash 
    //             className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'} 
    //             name=''
    //             onClick={handleVisibility}
    //         /> 
    //     }

    //     else{
    //         <FaEye 
    //             className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'}  
    //             onClick={handleVisibility}
    //         />
    //     }
    // }



    const InputType = visible ? "text" : "password";

    return { InputType, Icon};
}

export default usePasswordToggle;