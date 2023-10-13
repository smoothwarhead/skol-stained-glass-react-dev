import { useContext, useEffect, useState } from 'react';
import { contactInputs, shippingContactInputs, states } from '../../../files/inputs';
import FormInput from '../../forms/FormInput';
import './info.css';
import FormSelect from '../../formSelect/FormSelect';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import { hasEmpty } from '../../../files/methods';





const initialValues = {
        
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryInstructions: ""

}



const Info = (props) => {

    const { handleNavChange } = props;

    const {contactDetails, setContactDetails, orderPayload, setOrderPayload, handleContactDetails } = useContext(BusinessDataContext);

    
    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);
   
 

    

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }

    const handleAction = () => {

        let data;

        const sendData = (newData) => {
            
            if(hasEmpty(newData)){
                setError(true);
            }else{

                const contact = {
                    email: newData.email,
                    phoneNumber: newData.phoneNumber
                };

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

                const contactData =  {
                    id: Math.floor(Math.random() * 10000),
                    title: "Contact",
                    name: `${newData.email}`,
                    // phoneNumber: `${newData.phoneNumber}`

                };

                const shipmentData =  {
                    id: Math.floor(Math.random() * 10000),
                    title: "Ship To",
                    name: `${newData.address}, ${newData.city}, ${newData.state} ${newData.zipCode}`,
                    
                };

                const items = [contactData, shipmentData];

                handleContactDetails(items);


                // setContactDetails([contactData, shipmentData, ...contactDetails]);

                setOrderPayload({...orderPayload, contact, shippingAddress});
    
                handleNavChange(2);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });        
    
            }

        }



        if(values.apartment === "" && values.deliveryInstructions === ""){
            data = {
                email: values.email,
                phoneNumber: values.phoneNumber,
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



       

        
    }











    // useEffect(() => {

    //     if(!contactData){
    //         return
    //     }else{
    //         handleContactDetails(contactData)
    //     }

    //     if(!shipmentData){
    //         return
    //     }else{
    //         handleContactDetails(shipmentData);
    //     }



    // }, [contactData, shipmentData, handleContactDetails]);

  return (
    <>
        <div className="info-container">
            <div className="info-title">Checkout as guest</div>
            <span className='info-option-1'>or <Link>sign in</Link> for faster checkout</span>

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



            <div className="shipping-contact-info">

                <div className="contact-title">
                    Shipping to
                </div>

                <div className="multiple-fields">

                    <div className="multiple-fields-el">
                        <FormInput 
                            // key={index}
                            inputType="text"
                            {...shippingContactInputs[0]}    
                            value={values[shippingContactInputs[0].name]} 
                            handleChange={handleChange}  
                            validate={shippingContactInputs[0].validate}
                            errorMessage = {shippingContactInputs[0].errorMessage}
                            error = {error}
                            cName = "info-input"

                        />

                    </div>
                    

                    <div className="multiple-fields-el">
                        <FormInput 
                            // key={index}
                            inputType="text"
                            {...shippingContactInputs[1]}    
                            value={values[shippingContactInputs[1].name]} 
                            handleChange={handleChange}  
                            validate={shippingContactInputs[1].validate}
                            errorMessage = {shippingContactInputs[1].errorMessage}
                            error = {error}
                            cName = "info-input"

                        />
                        
                    </div>
                  
                    
                </div>


                <div className="other-fields">
                    <FormInput 
                        // key={index}
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
                        // key={index}
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
                        // key={index}
                        inputType="text"
                        {...shippingContactInputs[4]}    
                        value={values[shippingContactInputs[4].name]} 
                        handleChange={handleChange}  
                        validate={shippingContactInputs[4].validate}
                        errorMessage = {shippingContactInputs[4].errorMessage}
                        error = {error}
                        cName = "info-input"

                    />

                    <FormInput 
                        // key={index}
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


                <div className="multiple-fields">

                    <div className="multiple-fields-el">


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

                        
                    <div className="multiple-fields-el">

                        <FormInput 
                            // key={index}
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


            </div>

            
            <div className="info-btn-container">
                <Button
                    cName="checkouts-btn"
                    name="Continue"
                    action={handleAction}

                />
            </div>
        </div>

    
    </>
  )
}

export default Info