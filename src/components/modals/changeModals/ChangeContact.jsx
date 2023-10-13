import React, { useContext, useEffect, useState } from 'react'
import FormInput from '../../forms/FormInput';
import { contactInputs } from '../../../files/inputs';
import './change-modal.css';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import { hasEmpty } from '../../../files/methods';





const ChangeContact = (props) => {

    const { setModalOpen } = props;

    const [error, setError] = useState(false);

    const { closeModal, orderPayload, setOrderPayload, handleContactDetails, contactDetails } = useContext(BusinessDataContext);

    const [values, setValues] = useState({
        email: "",
        phoneNumber: ""
    });


    const handleChange = (e) => {

        
        setValues({ ...values, [e.target.name]: e.target.value})

    }

    const handleClose = () => {
        setModalOpen(false);
        closeModal();
    }

    const handleSubmit = () => {

        if(hasEmpty(values)){
           setError(true);
        }else{
            const contactData =  {
                id: Math.floor(Math.random() * 10000),
                title: "Contact",
                name: `${values.email}`

            };

            handleContactDetails([contactData]);
            setOrderPayload({...orderPayload, contact: values});


            handleClose();

        }
    };

    useEffect(() => {
               
        const checkItem = contactDetails.find(item => item.title.toLowerCase() === "contact".toLowerCase());

        if(checkItem){

            setValues(values => ({...values, email: orderPayload.contact.email, phoneNumber: orderPayload.contact.phoneNumber }));

        }else{
            return;
        }

    }, [contactDetails, orderPayload]);
   



  return (
    <>
        <div className="contact-info">

            <div className="contact-title">
                Contact Information
            </div>
            {
                contactInputs.map((input, index) => (

                    <FormInput 
                        key={index}
                        inputType="text"
                        {...input}    
                        value={values[input.name]} 
                        handleChange={handleChange}  
                        validate={input.validate}
                        errorMessage = {input.errorMessage}
                        error = {error}
                        cName = "info-input"

                    />
                ))
            }
            <span className='info-option-2'>Phone number helps ensure package delivery.</span>

        </div>
        

        <div className="form-modal-footer">
            <div className="form-modal-footer-items">
                <div 
                    className="form-modal-btns form-modal-cancel-btn"
                    onClick={handleClose}
                >
                    Cancel
                </div>

                <div 
                    className="form-modal-btns form-modal-create-btn"
                    onClick={handleSubmit}

                >
                    Change
                </div>

            </div>
        </div>

    
    </>
  )
}

export default ChangeContact;