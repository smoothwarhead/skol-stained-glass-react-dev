import React, { useContext,useState, useEffect } from 'react'
import FormRadio from '../../formRadio/FormRadio';
import { BusinessDataContext } from '../../../context/BusinessDataContext';

const ChangeMethod = (props) => {


    const { setModalOpen } = props;

    const { orderPayload,  setOrderPayload, handleContactDetails} = useContext(BusinessDataContext);


    

    const [shippingMethods, setShippingMethods] = useState([]);
    const [selectedMethod, setSelectedMethod] = useState(null);



    const changeMethod = (id) => {
       

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


    const handleClose = () => {
        setModalOpen(false);
        // closeModal();
    }






    const handleSubmit = () => {

        console.log(selectedMethod);
        
    
        setOrderPayload({...orderPayload, shippingMethod: selectedMethod});
    
        const shipmentMethod =  {
            id: selectedMethod.id,
            title: "Method",
            name: `${selectedMethod.type}`
    
        };


    
        handleContactDetails([shipmentMethod]);

        handleClose();

    
        // handleNavChange(3);
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
    
        
    };






    useEffect(() => {

        const handleRadioSelect = () => {

            
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
                
            
            ];

            const selectedMethod = orderPayload.shippingMethod;
        
                
            const updatedMethods = defaultShippingMethods.map((s) => {
                if(s.id === selectedMethod.id){
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

        handleRadioSelect();
    }, [orderPayload]);

   


    

  return (
    <>

        <div className="shipping-contact-info">

            <div className="contact-title">Shipping Method</div>

            <div className="methods-con">
                {shippingMethods.length === 0 ? <span>Loading</span>

                    :
                    shippingMethods.map(s => (
                        <FormRadio
                            key={s.id}
                            method = {s} 
                            handleRadioSelect = {changeMethod}            
                        />
                    ))
                }
            </div>


            <div className="form-modal-footer">
                <div className="form-modal-footer-items">
                    <div 
                        className="form-modal-btns form-modal-cancel-btn"
                        onClick={handleClose}
                    >
                        Cancel
                    </div>

                    <div 
                        className="form-modal-btns form-modal-create-btn"
                        onClick={handleSubmit}

                    >
                        Change
                    </div>

                </div>
            </div>


        </div>

    
    </>
  )
}

export default ChangeMethod;