import React from 'react'

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div className='modal-background'>
            
            <div 
                className="error-modal-container" 
            >
                
                {/* <div className="modal_header">
                    
                    <div className="modal_return" onClick={closeModal}>Back</div>
                </div> */}
                

                <div className="modal_body">
                    <p>Something went wrong:</p>
                    <pre>{error.message}</pre>
                    <button onClick={resetErrorBoundary}>Try again</button>



                </div>


            

            </div>

        </div>
  )
}

export default ErrorFallBack;


