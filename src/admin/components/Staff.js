import { HiPencil } from 'react-icons/hi';
import { CgDetailsMore } from 'react-icons/cg';
import { MdDelete } from 'react-icons/md';

const Staff = ({ staff }) => {
  return (
    <div className="tbl-staff-container">
        <div className="tbl-st st-name">{`${staff.FirstName} ${staff.LastName}`}</div>
        <div className="tbl-st st-role">Staff</div>
        <div className="tbl-st st-email">{staff.User.Email}</div>
        <div className="tbl-st st-action">
            <div className="st-action-icons">
                <div className="st-icons"><HiPencil className='st-edit-icon' /></div>
                <div className="st-icons"><CgDetailsMore className='st-details-icon' /></div>
                <div className="st-icons"><MdDelete className='st-delete-icon' /></div>
            </div>
            
        </div>
                    
    </div>
  )
}

export default Staff