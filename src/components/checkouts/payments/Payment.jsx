import FormRadio from '../../formRadio/FormRadio';
import './payment.css';
import Icon from '../../../images/paypal.png';
import { useContext, useEffect, useState } from 'react';
import Button from '../../button/Button';
import CardDetails from '../card-details/CardDetails';
import BillingAddress from '../billing-address/BillingAddress';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import ContactDetails from '../ContactDetails';
import { hasEmpty } from '../../../files/methods';
import CheckoutError from '../CheckoutError';




const initialValues = {
  cardNumber: "",
  cardName: "",
  expirationDate: "",
  code: "",

};

const Payment = (props) => {

  const {handleNavChange} = props;

  const { orderPayload, setOrderPayload, cartItems } = useContext(BusinessDataContext);


  

  const defaultPaymentMethods = [
    {
      id: 1,
      selected: false,
      method: "Credit Card",
      duration: "(Visa, Mastercard, American Express)",
      icon: false,
      hasSub: true
    },
    {
      id: 2,
      selected: false,
      method: "Paypal",
      duration: "",
      icon: true
    },
    

  ]


  const defaultBillingAddress = [
    {
      id: 1,
      selected: false,
      method: "Same as shipping",
      duration: "",
      icon: false
    },
    {
      id: 2,
      selected: false,
      method: "Use a different billing address",
      duration: "",
      icon: false,
      hasSub: true

    },
    

  ]

  const [paymentMethods, setPaymentMethods] = useState(defaultPaymentMethods);

  const [billingAddresses, setBillingAddresses] = useState(defaultBillingAddress);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const [cardValues, setCardValues] = useState(initialValues);

  const [billingValues, setBillingValues] = useState({
   
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    
  });

  const [cardError, setCardError] = useState("");
  const [billingError, setBillingError] = useState(false);
  const [submit, setSubmit] = useState(false);




  const handlePayment = (id) => {

    setCardError("")

    const selected = paymentMethods.filter(m => m.id === id);

    

    setSelectedPayment(selected[0]);

    // setOrderPayload({...orderPayload, paymentMethod: selectedPayment});


    const updatedMethods = paymentMethods.map((p) => {
      if(p.id === id){
        return {
          ...p,
          selected: true
        }
      }
      else{
        return {
          ...p,
          selected: false
        }
      }
    });

    setPaymentMethods(updatedMethods);


  }



  const handleBillingAddress = (id) => {

    setBillingError("");

    // let billings;


    const selected = billingAddresses.filter(b => b.id === id);

    setSelectedAddress(selected[0]);



    const updatedBilling = billingAddresses.map((b) => {
      if(b.id === id){
        return {
          ...b,
          selected: true
        }
      }
      else{
        return {
          ...b,
          selected: false
        }
      }

    });

    setBillingAddresses(updatedBilling);


  }



  const returnToShipping = () => {

    handleNavChange(2);
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    
  }



  const handleCardChange = (e) => {
    
    setCardValues({ ...cardValues, [e.target.name]: e.target.value});
    
  }


  const handleAddressChange = (e) => {
   
    setBillingValues({ ...billingValues, [e.target.name]: e.target.value});
    
  }



  

  const handleAction = () => {
    // console.log(hasEmpty(cardValues));

    const newAddress = {
      
      phoneNumber: billingValues.phoneNumber,
      firstName: billingValues.firstName,
      lastName: billingValues.lastName,
      address: billingValues.address,
      city: billingValues.city,
      state: billingValues.state,
      zipCode: billingValues.zipCode,
      apartment: billingValues.apartment ? billingValues.apartment : null
     

    }


    const isValid = (!selectedPayment) || (!selectedAddress) || ((selectedPayment.method.toLowerCase() === "Credit card".toLowerCase()) && hasEmpty(cardValues)) || ((selectedAddress.method.toLowerCase() === "Use a different billing address".toLowerCase()) && hasEmpty(newAddress));
    



    if(isValid){
      if(!selectedPayment){

        let error;

        error = "Please select a payment method";

        

        setCardError(error);
        // return
      
      }
      if(!selectedAddress){

        const error = "Please select a billing address";

        setBillingError(error);
        return

      
      }

      if((selectedPayment.method.toLowerCase() === "Credit card".toLowerCase()) && hasEmpty(cardValues)){

        const error = "You have selected credit card as your mode of payment but  your credit card information is not complete.";

        setCardError(error);
      
      } 
      
      if((selectedAddress.method.toLowerCase() === "Use a different billing address".toLowerCase()) && hasEmpty(newAddress)){

        const error = "Your billing address is not complete.";

        setBillingError(error);
        

      }
    
    
    }else{

      let paymentMethod;
      let billingAddress;

      
      if(selectedPayment.method.toLowerCase() === "Credit Card".toLowerCase()){

        paymentMethod = {
          type: selectedPayment.method,
          data: cardValues
          
        }


      }else{

        paymentMethod = {
          type: selectedPayment.method,
          
        }

      } 

      if((selectedAddress.method.toLowerCase() === "Use a different billing address".toLowerCase())){

        billingAddress = newAddress;


      }else{
        billingAddress = orderPayload.shippingAddress

      }
      
      // setOrderPayload()


      setCardError("");
      setBillingError("");

      setOrderPayload({...orderPayload, paymentMethod, billingAddress, products: cartItems});
      setSubmit(true);



    }


  }




  useEffect(() => {
    if(!submit){
      return;
    }else{
      console.log(orderPayload);

    }

  }, [submit, orderPayload])









  return (
    <>
    <div className="payment-container">

      <ContactDetails />

      <div className="shipping-contact-info">

        <div className="contact-title">
          Payment
        </div>

        <div className="methods-con">
          {
            paymentMethods.map(s => (
              <FormRadio
                key={s.id}
                method = {s} 
                handleRadioSelect = {handlePayment} 
                icon={!s.icon ? null : Icon}  
                hasSub={!s.hasSub ? false : s.hasSub}
                element={!s.hasSub ? null : <CardDetails
                                              cardValues={cardValues}
                                              setCardValues={setCardValues}
                                              handleChange={handleCardChange}
                                              error={cardError}

                                            />
                }  


              />
            ))
          }
        </div>



      </div>


      <div className="shipping-contact-info">

        <div className="contact-title">
          Billing Address
        </div>

        <div className="methods-con">
          {
            billingAddresses.map(b => (
              <FormRadio
                key={b.id}
                method = {b} 
                handleRadioSelect = {handleBillingAddress} 
                icon={!b.icon ? null : Icon} 
                hasSub={!b.hasSub ? false : b.hasSub}  
                element={!b.hasSub ? null : <BillingAddress 
                                                billingValues={billingValues}
                                                setBillingValues={setBillingValues}
                                                handleChange = {handleAddressChange}

                                            />
              
                }  



              />
            ))
          }
        </div>



      </div>


      <div className="shipping-btn-container">

        {
          cardError &&
          <CheckoutError 

            error={cardError}
          
          />
        }

        {
          billingError &&
          <CheckoutError 

            error={billingError}
          
          />
        }

        <div className="shipping-btn-container-flex">
          <span className="return-to-info"
            onClick={returnToShipping}
          >
            Return to Shipping
          </span>

          <span className="shipping-btn-con">
            <Button
              cName="checkouts-btn"
              name="Pay"
              action={handleAction}

            />
          </span>

        </div>
      </div>


 

    </div>
  </>
  )
}

export default Payment;