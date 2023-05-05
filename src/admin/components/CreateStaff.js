import React, { useState } from 'react'
import { addStaffInputs } from '../../files/inputs'
import FormInput from '../../components/forms/FormInput'
import '../../styles/adminStyles/createStaff.css';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "Admin",
    phoneNumber: "",
}



const CreateStaff = ({ setModalOpen }) => {

    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.email === "" || values.firstName === "" || values.lastName === "" || values.role === "" || values.phoneNumber === ""){
            setError(true);
        }
        
      
        else{
            console.log(values);
        }


    }


    // split the inputs into 2

    // const middleIndex = Math.ceil(addStaffInputs.length / 2);

    // const firstHalf = addStaffInputs.slice().splice(0, middleIndex);   
    // const secondHalf = addStaffInputs.slice().splice(-middleIndex);


  return (
    <>
        <div className="s-acc-container" noValidate onSubmit={handleSubmit}>
                    <div className="s-acc-title">Add Staff</div>
                    <div className="s-inp-container">

                        <div className="s-inps s-inp-container-1">
                            {
                                addStaffInputs.slice().splice(0, 3).map((input, index) => (
                                    <FormInput 
                                        key={index }
                                        inputType="text"
                                        {...input}
                                        icon={null}    
                                        value={values[input.name]} 
                                        handleChange={handleChange}  
                                        isPassword={input.isPassword}
                                        errorMessage = {input.errorMessage}
                                        error = {error}
                                        cName = "s-input"
                                    />
                                )) 
                            }
                        </div>

                        <div className="s-inps s-inp-container-2">

                            {
                                addStaffInputs.slice().splice(-2).map((input, index) => (
                                    <FormInput 
                                        key={index }
                                        inputType="text"
                                        {...input}
                                        icon={null}    
                                        value={values[input.name]} 
                                        handleChange={handleChange}  
                                        isPassword={input.isPassword}
                                        errorMessage = {input.errorMessage}
                                        error = {error}
                                        cName = "s-input"
                                    />
                                )) 
                            }

                        </div>

                        
                       

                    
                    </div>

                <div className="s-acc-footer">
                    <div className="s-acc-btns s-acc-cancel-btn" onClick={() => setModalOpen(false)}>Cancel</div>
                    <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Add Staff</div>
                </div>

                
        </div>
    </>
  )
}

export default CreateStaff