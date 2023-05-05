
import '../../styles/adminStyles/modal.css';






const Modal = ({ setModalOpen, modalBody, modalType }) => {


   



  return (
    <>
        <div className='modal-background'>
            
            <div className={modalType === "form" ? "form-modal-container" : "modal-container"}>
                
                <div className="modal_header">
                    {/* <div className="modal_title">Add Staff</div> */}
                    <div className="modal_return" onClick={() => setModalOpen(false)}>Back</div>
                </div>
                

                <div className="modal_body">
                    
                  {modalBody}


                </div>


               

            </div>

        </div>
    
    </>
  )
}

export default Modal