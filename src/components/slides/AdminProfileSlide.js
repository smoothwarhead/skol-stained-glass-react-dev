import React, { useContext, useEffect, useRef } from 'react'
import NavContext from '../../context/NavContext';
import { gsap, Power1 } from 'gsap';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { AuthContext } from '../../context/AuthContext';


const AdminProfileSlide = () => {

    const {slideProfile, setSlideProfile } = useContext(NavContext);
    const { adminLogout } = useApi();

    const { user } = useContext(AuthContext);

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


    const handleLogout = () => {
        adminLogout();
    }

    const handleProfileClick = () => {
        setSlideProfile(false);
    }

  return (

    <>
        <div className='profile-slide-container' ref={pContainerRef}>

            <div className="profile-slide" ref={pSlideRef}>
                <Link>My Account</Link>
                <Link 
                    to={`/access-auth/business/admin/profile/${user}`}
                    onClick={handleProfileClick}
                >
                    Profile
                </Link>
                <span onClick={handleLogout}>Logout</span>
            </div>
        </div>
        
    </>
    
  )
}

export default AdminProfileSlide