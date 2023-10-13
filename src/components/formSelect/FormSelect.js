import React from 'react'
import './form-select.css';



const FormSelect = (props) => {

    const {options, cName, validate, errorMessage, error, handleChange, placeholder,  ...selectProps } = props;


    const isValid = selectProps.value !== "";


    

  return (
    <div className="inp-control">

        <select 
            {...selectProps} 
            className={`${cName} ${validate ? ((error && !isValid) ? "inp-error" : "") : ""}`}
            onChange={handleChange}
        >
            
            
            <option >{placeholder}</option>

            
            {
                options.map((value, i) => (
                    <option 
                        key={i}
                        value={value.code}
                        
                        // name={value.number}
                    >
                        {value.name}

                    </option> 

                ))
            }
        </select>

        {validate ?
           
                
            (error && !isValid) ? <span className="inp-error-msg">{errorMessage}</span> : <div></div>
            
            :
            <span></span>
        }

          
    </div>
  )
}

export default FormSelect;