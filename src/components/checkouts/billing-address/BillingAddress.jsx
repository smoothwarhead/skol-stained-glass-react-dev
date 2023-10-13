import { useState } from 'react';
import { billingAddressInputs, states } from '../../../files/inputs';
import FormInput from '../../forms/FormInput';
import './billing-address.css';
import FormSelect from '../../formSelect/FormSelect';


const initialValues = {
    
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    apartment: "",
    state: "",
    zipCode: "",
    deliveryInstruction: ""
}

const BillingAddress = (props) => {

    const { billingValues, handleChange, error } = props;

    
    


    



  return (
    <div className="sub-con">

        <div className="sub-con-flex">

            <div className="sub-con-flex-1">             
                <FormInput 
                
                    inputType="text"
                    {...billingAddressInputs[0]}    
                    value={billingValues[billingAddressInputs[0].name]} 
                    handleChange={handleChange}  
                    validate={billingAddressInputs[0].validate}
                    errorMessage = {billingAddressInputs[0].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

            
            <div className="sub-con-flex-1">             
                <FormInput 
                
                    inputType="text"
                    {...billingAddressInputs[1]}    
                    value={billingValues[billingAddressInputs[1].name]} 
                    handleChange={handleChange}  
                    validate={billingAddressInputs[1].validate}
                    errorMessage = {billingAddressInputs[1].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

        </div>

        <FormInput 
  
            inputType="text"
            {...billingAddressInputs[2]}    
            value={billingValues[billingAddressInputs[2].name]} 
            handleChange={handleChange}  
            validate={billingAddressInputs[2].validate}
            errorMessage = {billingAddressInputs[2].errorMessage}
            error = {error}
            cName = "sub-input"

        />

        <FormInput 

            inputType="text"
            {...billingAddressInputs[3]}    
            value={billingValues[billingAddressInputs[3].name]} 
            handleChange={handleChange}  
            validate={billingAddressInputs[3].validate}
            errorMessage = {billingAddressInputs[3].errorMessage}
            error = {error}
            cName = "sub-input"

        />

        <FormInput 

            inputType="text"
            {...billingAddressInputs[4]}    
            value={billingValues[billingAddressInputs[4].name]} 
            handleChange={handleChange}  
            validate={billingAddressInputs[4].validate}
            errorMessage = {billingAddressInputs[4].errorMessage}
            error = {error}
            cName = "sub-input"

        />

        <div className="sub-con-flex">

            <div className="sub-con-flex-2">             
                <FormInput 
                
                    inputType="text"
                    {...billingAddressInputs[5]}    
                    value={billingValues[billingAddressInputs[5].name]} 
                    handleChange={handleChange}  
                    validate={billingAddressInputs[5].validate}
                    errorMessage = {billingAddressInputs[5].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

            <div className="sub-con-flex-2">   

                <FormSelect 
                    options={states}
                    cName="sub-input" 
                    handleChange={handleChange}
                    placeholder="State*"
                    name="state"
                    error={error}
                    errorMessage="Please select a state"
                    validate={true}
                    value={billingValues.state}



                
                />          
             

            </div>

            <div className="sub-con-flex-2">             
                <FormInput 
                
                    inputType="text"
                    {...billingAddressInputs[6]}    
                    value={billingValues[billingAddressInputs[6].name]} 
                    handleChange={handleChange}  
                    validate={billingAddressInputs[6].validate}
                    errorMessage = {billingAddressInputs[6].errorMessage}
                    error = {error}
                    cName = "sub-input"

                />                

            </div>

        </div>




    </div>
  )
}

export default BillingAddress;