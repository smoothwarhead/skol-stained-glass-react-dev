import React, { useState } from 'react'
import Modal from '../Modal';
import CreateAddressModal from '../modals/CreateAddressModal';
import EditAddressModal from '../modals/EditAddressModal';

const ProfileAddressCard = ({ title, admin}) => {

    const [openAddress, setOpenAddress] = useState(false);
    const [openEditAddress, setOpenEditAddress] = useState(false);


    const handleAddressClick = () => {
        setOpenAddress(false);
    }

    const handleEditAddressClick = () => {
        setOpenEditAddress(false);
    }

    
    const formatNumber = (str) => {

        if(!str){
            return null;
        }


        let newStr;
        let phoneDigit;
        if(str.trim().length > 10){
            newStr = str.substr(1, str.length - 1);
            
            phoneDigit = `${newStr.substr(0, 3)}-${newStr.substr(3, 3)}-${newStr.substr(6, 4)}`;
            return phoneDigit;


        }
        phoneDigit = `${str.substr(0, 3)}-${str.substr(3, 3)}-${str.substr(6, 4)}`;
        return phoneDigit;

        
       
    }


  return (
    <>

        {  openAddress &&
            <Modal           
                modalBody={ <CreateAddressModal adminId={admin?.AdminId} closeModal = {handleAddressClick} /> }
                modalType="form-address"
                closeModal={handleAddressClick}

            />
        }
        {  openEditAddress &&
            <Modal           
                modalBody={ <EditAddressModal admin={admin} closeModal = {handleEditAddressClick} /> }
                modalType="form-address"
                closeModal={handleEditAddressClick}

            />
        }
    
        <div className='profile-el-con-add'>
            <div className="profile-el-title">{title}</div>

            {
                !admin?.AddressLine1 || !admin?.City || !admin?.State ? 

                <div className='no-data-con'>
                    <span className='no-data'>There is no address linked to this profile</span>
                    <div className="add-addr-btn"
                        onClick={() => setOpenAddress(true)}
                    
                    >
                        Add Address
                    </div>
                </div>

                :  

                <div className='el-addr-con'>
                    <div className="el-addr-con-left">

                        <div className="el-addr addr-name">{!admin ? "Loading" : `${admin?.FirstName} ${admin?.LastName}`}</div>
                        <div className="el-addr addr-text">{!admin ? "Loading" : `${admin?.AddressLine1}, ${admin?.City}, ${admin?.State} ${admin?.PostalCode}`}</div>
                        <div className="el-addr adddr-ph-number">{!admin ? "Loading" : formatNumber(admin.User?.PhoneNumber ?? "")}</div>

                        <div className="add-addr-btn">Add Address</div>


                    </div>          

                    <div className="el-addr-btns">
                        <div 
                            className="el-addr-btn el-addr-edit-btn"
                            onClick={() => setOpenEditAddress(true)}
                        >
                            Edit
                        </div>
                        <div className="el-addr-btn el-addr-delete-btn">Delete</div>
                    </div>

                   


                </div>

                

            }
        </div>
    
    </>
    
  )
}

export default ProfileAddressCard