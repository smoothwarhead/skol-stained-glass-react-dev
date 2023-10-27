import React, { useContext, useState } from 'react'
import { addStaffInputs } from '../../files/inputs'
import FormInput from '../../components/forms/FormInput'
import '../../styles/adminStyles/createStaff.css';
import useApi from '../../hooks/useApi';
import Modal from './Modal';
import ConfirmationPage from './ConfirmationPage';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "Staff",
    phoneNumber: "",

}




const CreateStaff = ({ closeModal }) => {

    const { modalOpen, setModalOpen, message } = useContext(DataContext);


    const [values, setValues] = useState(initialValues);

    const { registerStaff } = useApi();

    const [error, setError] = useState(false);

   
    const navigate = useNavigate();

    
    

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
            registerStaff(values);
        }


    }


    const handleOk = () => {
        setModalOpen(false);
        navigate("/access-auth/business/admin/staffs");
        window.location.reload();
    }


    

  return (
    <>
        {  modalOpen &&
            <Modal                     
              modalBody={ <ConfirmationPage handleOk={handleOk} /> }
              modalType={message.type}
              closeModal={closeModal}
                
            />
        }
        <div className="s-acc-container" noValidate>
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
                                    validate={input.validate}
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
                    <div className="s-acc-btns s-acc-cancel-btn" onClick={closeModal}>Cancel</div>
                    <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Add Staff</div>
                </div>

                
        </div>
    </>
  )
}

export default CreateStaff