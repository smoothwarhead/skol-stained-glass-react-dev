import { useState } from 'react';
import FormInput from '../components/forms/FormInput';
import Footer from '../components/navigation/Footer';
import Navbar from '../components/navigation/Navbar';
import usePasswordToggle from '../hooks/usePasswordToggle';
import '../styles/account.css';
import { createAccountInputs } from '../files/inputs';


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const CreateAccount = () => {

    const { InputType, Icon } = usePasswordToggle();
   
    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);



    
    // const handleInvalid= (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value});
    // }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.email === "" || values.firstName === "" || values.lastName === "" || values.password === ""){
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
       
        <div className='create-acc-page'>
            
            <Navbar />
            

            <div className="account-section">
                <form className="form-container" noValidate onSubmit={handleSubmit}>
                    <div className="frm-title">Create Account</div>
                    <div className="frm-inps">

                        
                        {
                            createAccountInputs.map((input, index) => (
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
                                    cName = "input"
                                />
                            )) 
                        }

                        

                       
                    </div>

                    <div className="btn-section">


                        <button 
                            className="create-acc-btn"
                            // onClick={handleSubmit}
                        
                        >
                            Create Account
                        </button>
                    </div>

                  
                </form>
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        

        </div>

    </>
  )
}

export default CreateAccount;