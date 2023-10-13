import React, { useContext } from 'react'
import './business-modal.css';
import { BusinessDataContext } from '../../context/BusinessDataContext';

const BusinessModal = (props) => {

    const { setModalOpen, modalBody, modalType } = props;
    const { closeModal } = useContext(BusinessDataContext);


    const handleClose = () =>{
        setModalOpen(false);
        closeModal()
    }


  return (
    <>
        <div className='bus-modal-background'>
            
            <div className={modalType === "form" ? "bus-form-modal-container" : "bus-modal-container"}>
                
                <div className="bus-modal-header">
                    {/* <div className="modal_title">Add Staff</div> */}
                    <div className="bus-modal-return" onClick={handleClose}>Back</div>
                </div>
                

                <div className="bus-modal-body">
                    
                  {modalBody}


                </div>


               

            </div>

        </div>
    
    </>
  )
}

export default BusinessModal;