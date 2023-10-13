import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import './checkout.css';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import logo from '../../../images/Logo.png';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight} from 'react-icons/hi';
import Info from '../../../components/checkouts/info/Info';
import Shipping from '../../../components/checkouts/shipping/Shipping';
import Payment from '../../../components/checkouts/payments/Payment';
import CheckoutCartItem from '../../../components/checkouts/checkout-cart-item/CheckoutCartItem';
import { BusinessDataContext } from '../../../context/BusinessDataContext';







gsap.registerPlugin(ScrollTrigger);

const Checkout = () => {



  const [NAVS, setNAVS] = useState([
    {
      id: 1,
      name: "Information",
      hasIcon: true,
      active: true
    },
    {
      id: 2,
      name: "Shipping",
      hasIcon: true,
      active: false


    },
    {
      id: 3,
      name: "Payment",
      hasIcon: false,
      active: false


    },
  ]);

  const { cartItems, discount, cartSubTotal, modalOpen } = useContext(BusinessDataContext);

  const [total, setTotal] = useState(0);


  const [selectedNav, setSelectedNav] = useState(1);

  const shippingCost = 24;
  // const [shippingCost, setShippingCost] = useState();


  const handleNavChange = (id) => {

    const updatedNav = NAVS.map(n => {
      if(n.id === id){
        return {
          ...n,
          active: true
        }
      }else{
        return {
          ...n,
          active: false
        }
      }
    });

    setNAVS(updatedNav);

  }



  useLayoutEffect(() => {

      const ctx = gsap.context(() => {
        const ASIDE = document.querySelector('.right-con .inner');
        const MAIN = document.querySelector('.checkout-container');
        const PIN_DISTANCE = ASIDE.offsetHeight;
        const PIN_OFFSET = 0;


        ScrollTrigger.create({
          trigger: MAIN,
          pin: ASIDE,
          start: `top +=${PIN_OFFSET}`,
          // start: `top top`,
          end: `bottom top`,
          pinSpacing: true,
          invalidateOnRefresh: true,
          markers: true
        });

      })

      return () => ctx.revert();

  }, []);



  // useEffect(() => {
  //   console.log(NAVS);
  // }, [NAVS]);


  useEffect(() => {

    const switchMain = () => {
      const selectedNav = NAVS.filter(n => n.active)
      
      if(selectedNav[0].id === 1){
        setSelectedNav(1);
        
      }else if(selectedNav[0].id === 2){
        setSelectedNav(2);

      }else{
        setSelectedNav(3);

      }
    }

    switchMain();

  }, [NAVS])
  


  const setNavView = () => {
    if(selectedNav === 1){
      return <Info handleNavChange={handleNavChange} />
    }
    if(selectedNav === 2){
      return <Shipping handleNavChange={handleNavChange}/>
    }
    if(selectedNav === 3){
      return <Payment handleNavChange={handleNavChange}/>
    }
  }

  const handleChange = () => {
    console.log(discount);
  }


  useEffect(() => {
    const newTotal = cartSubTotal + shippingCost ;

    setTotal(newTotal);

  },[cartSubTotal])


  return (
    <>
      <div className={`checkout-page ${modalOpen ? "modal-open" : ""}`}>
        
        <div className="checkout-nav-section">

          <header className="header">

            <Link to="/">
              <div className="header-logo-container">

                <div className="header-logo-img">
                  <img src={logo} alt="Logo" />

                </div>
                <div className="header-comp-name">Skol Stained Glass</div>

              </div>
            </Link>

            <span className="header-cart-btn">
              Cart
            </span>

          </header>
            
        </div>

        <div className="checkout-container">

            <section className="left-con" >

              <div className="checkout-body-nav">
                {
                  NAVS.map(item => (
                        
                    <div className="checkout-nav" key={item.id}>
                      <span 
                        className={`nav-1 ${item.active ? "nav-active" : ""}`}
                        
                      >
                        {item.name}
                      </span>


                      {item.hasIcon ? <span className="nav-2"><HiArrowNarrowRight /> </span> : <span></span>}

                    </div>

                    
                  ))
                }

              </div>

              <div className="main-el">

                <div className="main-el-body">
                  {setNavView()}
                </div>                

              </div>
            
            </section>


            <section className="right-con">
              <div className="inner">
                <div className="checkout-items">
                  {cartItems.map((item, index) => (
                    <CheckoutCartItem 
                      key={index}
                      item={item}
                    
                    />
                  ))

                  }
                </div>

                {discount &&
                  <div className="discount-code-con">
                  <input
                      inputType="text"
                      name="discountCode"
                      placeholder="Discount Code"   
                      value={discount} 
                      onChange={handleChange}                                           
                      className = "dis-input"

                  />

                  <div className="dis-apply-btn">
                    Apply
                  </div>
                  </div>
                }

                <div className="order-conclusion">

                  <div className="order-conclusion-el el-1">
                    <span className="order-conclusion-el-1">Subtotal</span>
                    <span className="order-conclusion-el-1">{`$${cartSubTotal.toFixed(2)}`}</span>
                  </div>

                  <div className="order-conclusion-el el-1">
                    <span className="order-conclusion-el-1">Shipping</span>
                    <span className="order-conclusion-el-1">{`$${shippingCost.toFixed(2)}`}</span>
                  </div>

                  <div className="order-conclusion-el el-2">
                    <span className="order-conclusion-el-2">Total</span>
                    <span className="order-conclusion-el-2">{`$${total.toFixed(2)}`}</span>

                  </div>
                </div>


              </div>

            </section>
        
            
        </div>

        <div className="checkout-footer">

        </div>
          
      </div>
    
    </>
  )
}

export default Checkout