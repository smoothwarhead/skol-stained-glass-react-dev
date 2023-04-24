import '../../styles/slides.css';
import '../../styles/account.css';
import { HiX } from 'react-icons/hi';
import { useRef, useEffect, useContext } from 'react';
import { gsap, Power1 } from 'gsap';
import ForgotSlide from './ForgotSlide';
import { Link } from 'react-router-dom';
import NavContext from '../../context/NavContext';


const AccountSlide = () => {

    const accountRef = useRef(null);
    const containerRef = useRef(null);

    const { slideAccount, setSlideAccount, setSlideForgot} = useContext(NavContext);

   

    const tl = useRef();


    // const closeSlideAccount = () => {
    //     slideAccount();
    // }

    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });

        tl.current.to(accountRef.current, {
            right: 0,
            duration: 0.7,
            ease: Power1.easeInOut
        });
        


    }, [])


    useEffect(() => {
        
     slideAccount ? tl.current.play() : tl.current.reverse()



    }, [slideAccount]);


    const handleForgotClick = () => {
        if(slideAccount){
            setSlideAccount(false);
          }
      
          setSlideForgot(true);
    }


    

  return (
    <>
        <ForgotSlide />
        <div className='slide-container' ref={containerRef}>
            <div 
                className="account-slide" 
                ref={accountRef}
            >


                <div className="account-slide-hdr">
            
                        <HiX 
                            className='close-icon'
                            onClick={() => setSlideAccount(false)}
                            
                        />
                
                </div>

                <div className="account-container">
                    <div className="act-title">Sign In</div>
                    <div className="inp-container">
                        <input type="text" className="inp-el" placeholder='Email*' />
                        <input type="text" className="inp-el" placeholder='Password*'/>
                    </div>

                    <div className="forget-password" onClick={handleForgotClick}>Forgot Password?</div>

                    <div className="sign-in-btn">Sign in</div>

                    <div className="no-act-link">
                        <span>Don't have an account?</span>
                       <Link to="/register"><span className='create-link'>Create Account</span></Link> 
                    </div>
                </div>


            </div>
        </div>
    
    </>
  )
}

export default AccountSlide;