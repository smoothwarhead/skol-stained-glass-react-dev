import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import '../../../styles/adminStyles/adminAccount.css';
import { adminSignInInputs } from '../../../files/inputs';
import FormInput from '../../../components/forms/FormInput';
import usePasswordToggle from '../../../hooks/usePasswordToggle';




const initialValues = {
    userName: "",
    password: ""
}

const SignIn = () => {

    const { InputType, Icon } = usePasswordToggle();

    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);



    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.userName === "" || values.password === ""){
            setError(true);
        }
        
        // if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        //     setError(true);
        // }
        else{
            console.log(values);
        }


    }









  return (

    <>
        <div className='account-body'>
            <div className="admin-acc-container">

                <div className="log">
                    <div className="login"> login</div>
                    <div className="log-info">
                        <h3>Please enter your email and password</h3>
                        <form onSubmit={handleSubmit}>

                            {
                                adminSignInInputs.map((input, index) => (

                                    <FormInput 
                                        key={index }
                                        inputType={!input.isPassword ? "text" : InputType}
                                        {...input}
                                        icon={!input.isPassword ? null : Icon}    
                                        value={values[input.name]} 
                                        handleChange={handleChange}  
                                        isPassword={input.isPassword}
                                        errorMessage = {input.errorMessage}
                                        error = {error}
                                    />

                                ))
                            }
                        
                            <button>Login</button>
                        </form>
                        {/* <p>Don't have account? <Link href="sign-up.html">create an account</Link></p> */}
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SignIn;