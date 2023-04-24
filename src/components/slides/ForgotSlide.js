import '../../styles/slides.css';
import '../../styles/account.css';
import { HiX } from 'react-icons/hi';
import { useRef, useEffect, useContext } from 'react';
import { gsap, Power1 } from 'gsap';
import NavContext from '../../context/NavContext';

const ForgotSlide = () => {


    const { slideForgot, setSlideForgot } = useContext(NavContext);

    const forgotRef = useRef(null);
    const containerRef = useRef(null);


    const tl = useRef();

    
    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });

        tl.current.to(forgotRef.current, {
            right: 0,
            duration: 0.7,
            ease: Power1.easeInOut
        });
        


    }, [])


    useEffect(() => {
        
     slideForgot ? tl.current.play() : tl.current.reverse()



    }, [slideForgot]);

  return (

    <>
        {/* <AccountSlide /> */}
        <div className='slide-container' ref={containerRef}>
            <div 
                className="account-slide" 
                ref={forgotRef}
            >


                <div className="account-slide-hdr">
            
                        <HiX 
                            className='close-icon'
                            onClick={() => setSlideForgot(false)}
                            
                        />
                
                </div>

                <div className="account-container">
                    <div className="act-title">Forgot Password?</div>

                    <div className="forget-text">Please enter your email address below and we will send you a link to reset your password.</div>

                    <div className="inp-container">
                        <input type="text" className="inp-el" placeholder='Email*' />
                    </div>


                    <div className="sign-in-btn">Send Link</div>

                   
                </div>


            </div>
        </div>
    </>
  
  )
}

export default ForgotSlide