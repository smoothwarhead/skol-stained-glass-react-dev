import React, { useContext, useState, useEffect } from 'react'
import FormInput from '../../forms/FormInput'
import { shippingContactInputs, states } from '../../../files/inputs'
import FormSelect from '../../formSelect/FormSelect';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import { hasEmpty } from '../../../files/methods';


const initialValues = {
        
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryInstructions: ""

}



const ChangeShipping = (props) => {

    const { setModalOpen } = props;



    const { contactDetails, orderPayload, handleContactDetails, setOrderPayload } = useContext(BusinessDataContext);

    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);





    useEffect(() => {
       
        const checkItem = contactDetails.find(item => item.title.toLowerCase() === "ship to".toLowerCase());

        if(checkItem){

            setValues(values => (
                {
                    ...values, 
                    address: orderPayload.shippingAddress.address, 
                    firstName: orderPayload.shippingAddress.firstName, 
                    lastName: orderPayload.shippingAddress.lastName, 
                    city: orderPayload.shippingAddress.city, 
                    zipCode: orderPayload.shippingAddress.zipCode, 
                    apartment: orderPayload.shippingAddress.apartment, 
                    deliveryInstructions: orderPayload.shippingAddress.deliveryInstructions, 
                    
                    
                }
                
            ));

        }else{
            return;
        }

    }, [contactDetails, orderPayload]);



    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }


    const handleClose = () => {
        setModalOpen(false);
        // closeModal();
    }






    const handleSubmit = () => {

        console.log(values);

        
        let data;

        const sendData = (newData) => {
            
            if(hasEmpty(newData)){
                setError(true);
            }else{

            
                const shippingAddress = {
                    firstName: newData.firstName,
                    lastName: newData.lastName,
                    address: newData.address,
                    apartment: !newData.apartment ? "" : newData.apartment,
                    city: newData.city,
                    state: newData.state,
                    zipCode: newData.zipCode,
                    deliveryInstructions: !newData.deliveryInstructions ? "" : newData.deliveryInstructions

                };

            

                const shipmentData =  {
                    id: Math.floor(Math.random() * 10000),
                    title: "Ship To",
                    name: `${newData.address}, ${newData.city}, ${newData.state} ${newData.zipCode}`,
                    
                };

                const items = [shipmentData];

                handleContactDetails(items);


                // setContactDetails([contactData, shipmentData, ...contactDetails]);

                setOrderPayload({...orderPayload, shippingAddress});

                handleClose();

       
    
            }

        }



        if(values.apartment === "" && values.deliveryInstructions === ""){

            data = {
             
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                state: values.state,
                zipCode: values.zipCode,
                               
            };

            sendData(data);

            return;

        }

        if(values.apartment === ""){
            data = {
                email: values.email,
                phoneNumber: values.phoneNumber,
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                state: values.state,
                zipCode: values.zipCode,
                deliveryInstructions: values.deliveryInstructions
                               
            };

            sendData(data);
            return;


        }


        if(values.deliveryInstructions === ""){

            data = {
                email: values.email,
                phoneNumber: values.phoneNumber,
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                state: values.state,
                zipCode: values.zipCode,
                apartment: values.apartment
                               
            };

            sendData(data);
            return;


        }



       

      



    };





  return (
    <div className="sub-con">

        <div className="sub-con-flex">

            <div className="sub-con-flex-1">             
                <FormInput 
                
                    inputType="text"
                    {...shippingContactInputs[0]}    
                    value={values[shippingContactInputs[0].name]} 
                    handleChange={handleChange}  
                    validate={shippingContactInputs[0].validate}
                    errorMessage = {shippingContactInputs[0].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

            
            <div className="sub-con-flex-1">             
                <FormInput 
                
                    inputType="text"
                    {...shippingContactInputs[1]}    
                    value={values[shippingContactInputs[1].name]} 
                    handleChange={handleChange}  
                    validate={shippingContactInputs[1].validate}
                    errorMessage = {shippingContactInputs[1].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

        </div>

        <FormInput 
  
            inputType="text"
            {...shippingContactInputs[2]}    
            value={values[shippingContactInputs[2].name]} 
            handleChange={handleChange}  
            validate={shippingContactInputs[2].validate}
            errorMessage = {shippingContactInputs[2].errorMessage}
            error = {error}
            cName = "info-input"

        />

        <FormInput 

            inputType="text"
            {...shippingContactInputs[3]}    
            value={values[shippingContactInputs[3].name]} 
            handleChange={handleChange}  
            validate={shippingContactInputs[3].validate}
            errorMessage = {shippingContactInputs[3].errorMessage}
            error = {error}
            cName = "info-input"

        />

        <FormInput 

            inputType="text"
            {...shippingContactInputs[4]}    
            value={values[shippingContactInputs[4].name]} 
            handleChange={handleChange}  
            validate={shippingContactInputs[4].validate}
            errorMessage = {shippingContactInputs[4].errorMessage}
            error = {error}
            cName = "info-input"

        />

        <div className="sub-con-flex">

            <div className="sub-con-flex-2">             
                <FormInput 
                
                    inputType="text"
                    {...shippingContactInputs[5]}    
                    value={values[shippingContactInputs[5].name]} 
                    handleChange={handleChange}  
                    validate={shippingContactInputs[5].validate}
                    errorMessage = {shippingContactInputs[5].errorMessage}
                    error = {error}
                    cName = "info-input"

                />                

            </div>

            <div className="sub-con-flex-2">   

                <FormSelect 
                    options={states}
                    cName="info-input" 
                    handleChange={handleChange}
                    placeholder="State*"
                    name="state"
                    error={error}
                    errorMessage="Please select a state"
                    validate={true}
                    value={values.state}

                
                />          
             

            </div>

            <div className="sub-con-flex-2">             
                <FormInput 
                
                    inputType="text"
                    {...shippingContactInputs[6]}    
                    value={values[shippingContactInputs[6].name]} 
                    handleChange={handleChange}  
                    validate={shippingContactInputs[6].validate}
                    errorMessage = {shippingContactInputs[6].errorMessage}
                    error = {error}
                    cName = "info-input"

                />                

            </div>

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




    </div>
  )
}

export default ChangeShipping;