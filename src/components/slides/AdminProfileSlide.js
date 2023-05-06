import React, { useContext, useEffect, useRef } from 'react'
import NavContext from '../../context/NavContext';
import { gsap, Power1 } from 'gsap';
import { Link } from 'react-router-dom';


const AdminProfileSlide = () => {

    const {slideProfile } = useContext(NavContext);

    const pSlideRef = useRef();
    const pContainerRef = useRef();

    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline({ paused: true });

        tl.current.to(pContainerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });


        tl.current.to(pSlideRef.current, {
            display: "block",
            top: "8vh",
            duration: 0.1,
            ease: Power1.easeInOut
        });

    }, []);


    useEffect(() => {

       
        
        slideProfile ? tl.current.play() : tl.current.reverse()
   
   
   
    }, [slideProfile])

  return (

    <>
        <div className='profile-slide-container' ref={pContainerRef}>

            <div className="profile-slide" ref={pSlideRef}>
                <Link>My Account</Link>
                <Link>Profile</Link>
                <Link>Logout</Link>
            </div>
        </div>
        
    </>
    
  )
}

export default AdminProfileSlide