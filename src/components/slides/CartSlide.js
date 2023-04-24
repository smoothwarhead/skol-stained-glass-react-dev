import { HiX } from 'react-icons/hi';
import { useRef, useEffect, useContext } from 'react';
import { gsap, Power1 } from 'gsap';
import '../../styles/cart.css';
import NavContext from '../../context/NavContext';


const CartSlide = ( ) => {


  const { slideCart, setSlideCart } = useContext(NavContext);
  const cartRef = useRef(null);
  const containerRef = useRef(null);

  const tl = useRef();



  useEffect(() => {
      
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(containerRef.current, {
          display: "block",
          duration: 0,
          ease: Power1.easeInOut
      });

      tl.current.to(cartRef.current, {
          right: 0,
          duration: 0.7,
          ease: Power1.easeInOut
      });
      


  }, [])


  useEffect(() => {
      
   slideCart ? tl.current.play() : tl.current.reverse()



  }, [slideCart])





  return (
    <div className='slide-container' ref={containerRef}>
        <div 
            className="cart-slide" 
            ref={cartRef}
        >


            <div className="cart-slide-hdr">
           
              <div className="cart-title">
                Shopping Cart
              </div>
              <HiX 
                  className='close-icon'
                  onClick={() => setSlideCart(false)}
                  
              />
              
            </div>


        </div>
    </div>
  )
}

export default CartSlide