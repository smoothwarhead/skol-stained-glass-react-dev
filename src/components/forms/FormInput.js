import { useEffect, useRef, useState } from 'react';
import '../../styles/account.css';
import { gsap, Power1 } from 'gsap';



const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);


    const conRef = useRef(null);
    const tl = useRef();

    

    const {error, inputType, errorMessage, isPassword, icon, handleChange, ...inputProps} = props;
    const [lowerPassed, setLowerPassed] = useState(false);
    const [numPassed, setNumPassed] = useState(false);
    const [upperPassed, setUpperPassed] = useState(false);
    const [lengthPassed, setLengthPassed] = useState(false);
    
    
    
    


    const handleTouched = (e) => {
        setTouched(true);
       
    }

    const handleFocus = () => {
        setFocused(true);
        
    }


    const isValid = inputProps.value !== "";
       

  

    useEffect(() => {
        if(inputProps.name === "password"){

            let val = inputProps.value;

            if(/[a-z]/.test(val)){
                setLowerPassed(true);
            }else{
                setLowerPassed(false);
            }

            if(/[A-Z]/.test(val)){
                setUpperPassed(true);
            }
            else{
                setUpperPassed(false);
            }

            if(/[0-9]/.test(val)){
                setNumPassed(true);
            }
            else{
                setNumPassed(false);
            }

            if(val.length >= 6){
                setLengthPassed(true);
            }
            else{
                setLengthPassed(false);
            }
        }
    }, [inputProps])


    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(conRef.current, {
            display: "flex",
            top: 0,
            duration: 0.5,
            ease: Power1.easeInOut
        });

       
        


    }, [])

   
    useEffect(() => {
        
        focused ? tl.current.play() : tl.current.reverse()
   
   
   
       }, [focused]);


  return (
    <>
        <div className="inp-control">

            <input 
                type={inputType} 
                onChange={handleChange}
                {...inputProps}
                onBlur={handleTouched}
                onFocus={handleFocus}
                className={(touched && !isValid) || (error && !isValid) ? "inp-error" : ""}
                
            />

            {
                inputProps.name === "email" ?
                ((touched && !/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(inputProps.value)) || (touched && !isValid) || (error && !isValid) ? 
                
                    <span className="inp-error-msg">{errorMessage}</span> : <div></div>
                )
                :
                (touched && !isValid) || (error && !isValid) ? <span className="inp-error-msg">{errorMessage}</span> : <div></div>
                
            }
      
            <span className="password-toggle">{icon}</span>

            
            {
                isPassword &&
                (
                    <div className="password-cons" ref={conRef}>

                        <span className={lowerPassed ? "pwd-cons passed" : "pwd-cons"}>1 lowercase character</span>
                        <span className={numPassed ? "pwd-cons passed" : "pwd-cons"}>1 number</span>
                        <span className={upperPassed ? "pwd-cons passed" : "pwd-cons"}>1 uppercase character</span>
                        <span className={lengthPassed ? "pwd-cons passed" : "pwd-cons"}>6 character minimum</span>
                    
                    </div>
                    
                )
            }

        </div>
    </>
  )
}

export default FormInput