import { useState } from 'react'
import Modal from '../components/Modal';
import CreateStaff from '../components/CreateStaff';
import { BiPlus } from 'react-icons/bi';


const Staffs = () => {

    const [modalOpen, setModalOpen] = useState(false);

   
    
  return (
    <>
        

        {  modalOpen &&
            <Modal                     
                setModalOpen={setModalOpen}
                modalBody={ <CreateStaff setModalOpen={setModalOpen}/> }
                modalType="form"

            />
        }

        <div className="staffs-page">
            <div className="staffs-page-title">

                <p className="s-title">Staffs</p>

                <div className="title-btns">

                    <div className="add-staff-btn" onClick={() => setModalOpen(true)}>
                        <BiPlus className='add-staff-btn-icon'/>
                        <span>Add Staff</span>
                        
                    </div>


                </div>
            </div>
        </div>
            
    </>
  )
}

export default Staffs