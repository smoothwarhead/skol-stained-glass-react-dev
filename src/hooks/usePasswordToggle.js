import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const usePasswordToggle = () => {
  
    const [visible, setVisibility] = useState(false);

    const Icon = (
        visible ? 
            <FaEyeSlash 
                className='password-icon' 
                onClick={() => setVisibility(!visible)}
            /> 
            : 
            <FaEye 
                className='password-icon' 
                onClick={() => setVisibility(!visible)}
            />
    );

    const InputType = visible ? "text" : "password";

    return { InputType, Icon};
}

export default usePasswordToggle;