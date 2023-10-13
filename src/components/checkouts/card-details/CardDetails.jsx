import React, { useState } from 'react'
import { cardDetailsInputs } from '../../../files/inputs';
import { FiLock } from 'react-icons/fi';
import FormInput from '../../forms/FormInput';
import './card-details.css';






const CardDetails = (props) => {


    const { cardValues, handleChange } = props;

    


    

  return (
    <div className="sub-con">

        <FormInput 
            
            inputType="text"
            {...cardDetailsInputs[0]}    
            value={cardValues[cardDetailsInputs[0].name]} 
            handleChange={handleChange}  
            validate={cardDetailsInputs[0].validate}
            errorMessage = {cardDetailsInputs[0].errorMessage}
            icon = {!cardDetailsInputs[0].isCard ? null : <FiLock />}
            isCard = {cardDetailsInputs[0].isCard }
            // error={error}
            cName = "sub-input"

        />

        <FormInput 
            
            inputType="text"
            {...cardDetailsInputs[1]}    
            value={cardValues[cardDetailsInputs[1].name]} 
            handleChange={handleChange}  
            validate={cardDetailsInputs[1].validate}
            errorMessage = {cardDetailsInputs[1].errorMessage}
            icon = {!cardDetailsInputs[1].isCard ? null : <FiLock />}
            // error = {error}
            cName = "sub-input"

        />

     

        <div className="sub-con-flex">

            <div className="sub-con-flex-1">

                <FormInput 
                    
                    inputType="text"
                    {...cardDetailsInputs[2]}    
                    value={cardValues[cardDetailsInputs[2].name]} 
                    handleChange={handleChange}  
                    validate={cardDetailsInputs[2].validate}
                    errorMessage = {cardDetailsInputs[2].errorMessage}
                    icon = {!cardDetailsInputs[2].isCard ? null : <FiLock />}
                    // error = {error}
                    cName = "sub-input"

                />
                

            </div>

            <div className="sub-con-flex-1">
                <FormInput 
                    
                    inputType="text"
                    {...cardDetailsInputs[3]}    
                    value={cardValues[cardDetailsInputs[3].name]} 
                    handleChange={handleChange}  
                    validate={cardDetailsInputs[3].validate}
                    errorMessage = {cardDetailsInputs[3].errorMessage}
                    icon = {!cardDetailsInputs[3].isCard ? null : <FiLock />}
                    // error = {error}
                    cName = "sub-input"

                />

            </div>

           

           

        </div>
    </div>
  )
}

export default CardDetails;