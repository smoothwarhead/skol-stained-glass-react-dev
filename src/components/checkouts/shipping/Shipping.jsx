import { useContext, useState } from 'react';
import FormRadio from '../../formRadio/FormRadio';
import './shipping.css';
import Button from '../../button/Button';
import { BusinessDataContext } from '../../../context/BusinessDataContext';
import ContactDetails from '../ContactDetails';
import CheckoutError from '../CheckoutError';

const Shipping = (props) => {


  const {handleNavChange} = props;

  const { orderPayload, setOrderPayload, handleContactDetails} = useContext(BusinessDataContext);


  const [selectedMethod, setSelectedMethod] = useState(null);

  const [checkoutError, setCheckoutError] = useState("");


  // const {contactDetails, setContactDetails, orderPayload, setOrderPayload} = useContext(BusinessDataContext);


  const defaultShippingMethods = [
    {
      id: 1,
      selected: false,
      method: "Local Delivery",
      duration: "1 to 3 business days",
      price: 0
    },
    {
      id: 2,
      selected: false,
      method: "USPS",
      duration: "5 to 10 business days",
      price: 21.80
    },
    

  ]

  const [shippingMethods, setShippingMethods] = useState(defaultShippingMethods)


  const handleRadioSelect = (id) => {

    setCheckoutError("");

    const selected = shippingMethods.filter(m => m.id === id);

    const method = {
      id: selected[0].id,
      type: selected[0].method,
      cost: selected[0].price,
    }

    setSelectedMethod(method);

    const updatedMethods = shippingMethods.map((s) => {
      if(s.id === id){
        return {
          ...s,
          selected: true
        }
      }
      else{
        return {
          ...s,
          selected: false
        }
      }
    });

    setShippingMethods(updatedMethods);


  }





  const handleAction = () => {

    if(!selectedMethod){

      const error = "To continue, you have to select a shipping method";

      setCheckoutError(error);
      

    }else{

      setOrderPayload({...orderPayload, shippingMethod: selectedMethod});

      const shipmentMethod =  {
        id: selectedMethod.id,
        title: "Method",
        name: `${selectedMethod.type}`

      };

      handleContactDetails([shipmentMethod]);

      handleNavChange(3);
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });

    }    

  }

  const returnToInfo = () => {

    handleNavChange(1);
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    
  }

  // useEffect(() => {
  //   console.log("contactDetails", contactDetails);
  //   console.log("orderpayload", orderPayload);
  // }, [contactDetails, or])



  return (
    <>
      <div className="shipping-container">

        <ContactDetails />

        <div className="shipping-contact-info">

          <div className="contact-title">
            Shipping Method
          </div>

          <div className="methods-con">
            {
              shippingMethods.map(s => (
                <FormRadio
                  key={s.id}
                  method = {s} 
                  handleRadioSelect = {handleRadioSelect}            
                />
              ))
            }
          </div>

          

        </div>



        <div className="shipping-btn-container">

        {
          checkoutError &&
          <CheckoutError 

            error={checkoutError}
          
          />
        }


          <div className="shipping-btn-container-flex">

          
            <span className="return-to-info"
              onClick={returnToInfo}
            >
              Return to Information
            </span>

            <span className="shipping-btn-con">
              <Button
                cName="checkouts-btn"
                name="Payment"
                action={handleAction}

              />
            </span>

          </div>

        </div>


      </div>
    </>
  )
}

export default Shipping;