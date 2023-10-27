import { useState } from "react";
import Modal from "../Modal";
import ChangePasswordModal from "../modals/ChangePasswordModal";


const ProfileContactCard = ({ title, admin }) => {

    const [openPass, setOpenPass] = useState(false);


    const formatEmail = (email) => {


        if(!email){
            return null;
        }
      
        const [name, domain] = email.split('@');
        const firstChar = name[0];
        const secondChar = name[name.length - 1];
  
        const newEmail = `${firstChar}${new Array(name.length).join('*')}${secondChar}@${domain}`;

        return newEmail;
        
    }

    const handlePassClick = () => {
        setOpenPass(false);
    }

    

  return (
    <>
        {  openPass &&
            <Modal           
                modalBody={ <ChangePasswordModal closeModal = {handlePassClick} /> }
                modalType="form"
                closeModal={handlePassClick}

            />
        }
        <div className="profile-el-con">

            <div className="profile-el-left">
                <div className="profile-el-title">{title}</div>

                <div className="profile-el-text">
                    <div className="profile-el-text-con profile-el-text-tp">
                        <div className="profile-el-text-con-lbl">Email:</div>
                        <div className="profile-el-text-con-txt">{!admin ? "Loading" : formatEmail(admin.User?.Email)}</div>
                    </div>
                    {/* <div className="profile-el-text-con profile-el-text-btm"></div> */}
                </div>

            </div>
        

        </div>

        <div className="profile-el-pwd-con">
            <div className="profile-el-text-con profile-el-text-pwd">
                <div className="profile-el-text-con-lbl">Password:</div>
                <div className="profile-el-text-con-txt">{new Array(admin.User?.Email.length).join('*')}</div>
            </div>


            <div className="profile-el-right">
                <div 
                    className="profile-el-edit-btn"
                    onClick={() => setOpenPass(true)}
                >
                    Edit/Change
                </div>
                
            </div>
                        
        </div>
    </>
  )
}

export default ProfileContactCard