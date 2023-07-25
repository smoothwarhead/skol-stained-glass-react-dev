import {  useContext, useState } from 'react'
import Modal from '../components/Modal';
import CreateStaff from '../components/CreateStaff';
import { BiPlus } from 'react-icons/bi';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/adminStyles/staffs.css'
import Staff from '../components/Staff';




const Staffs = () => {

    const { user } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
    }
   
    const{ data: admins } = useFetch(`/access-auth/business/admin/${user}/staffs`);

    console.log(admins);
    
  return (
    <>
        

        {  modalOpen &&
            <Modal           
                modalBody={ <CreateStaff closeModal = {handleCloseModal} /> }
                modalType="form"
                closeModal={handleCloseModal}

            />
        }

        <div className="dash-page">
            <div className="staffs-page-title">

                <p className="s-title">Staffs</p>

                <div className="title-btns">

                    <div className="add-staff-btn" onClick={() => setModalOpen(true)}>
                        <BiPlus className='add-staff-btn-icon'/>
                        <span>Add Staff</span>
                        
                    </div>


                </div>
            </div>


            {
                admins.length === 0 ?
                <span className='no-data'>No staff is registered at the moment</span>
                :

                <div className="all-staff-table">
                    <div className="tbl-titles-container">
                        <div className="tbl-titles staff-name">Staff Name</div>
                        <div className="tbl-titles staff-role">Role</div>
                        <div className="tbl-titles staff-email">Email</div>
                        <div className="tbl-titles staff-email">Action</div>
                        
                    </div>


                    <div className="tbl-body">
                        {
                            admins.map((staff, index) => (
                                <Staff 
                                    staff={staff}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>

                
            }
            

        </div>
            
    </>
  )
}

export default Staffs