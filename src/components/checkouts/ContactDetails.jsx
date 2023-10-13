import React, { useContext, useState } from 'react'
import { BusinessDataContext } from '../../context/BusinessDataContext';
import ChangeContact from '../modals/changeModals/ChangeContact';
import BusinessModal from '../businessModal/BusinessModal';
import ChangeShipping from '../modals/changeModals/ChangeShipping';
import ChangeMethod from '../modals/changeModals/ChangeMethod';

const ContactDetails = () => {

  const { contactDetails, setModalOpen } = useContext(BusinessDataContext);

  const [openContact, setOpenContact] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const [openDelivery, setOpenDelivery] = useState(false);

 
  const handleChange = (title) => {
    setModalOpen(true);

    if(title.toLowerCase() === "contact"){

      setOpenContact(true);

    }
    if(title.toLowerCase() === "ship to"){

      setOpenShipping(true);

    }else{
      setOpenDelivery(true);

    }


  }



  return (
    <div>
        {openContact && 
          <BusinessModal
            setModalOpen={setOpenContact}
            modalBody={<ChangeContact setModalOpen ={setOpenContact} />}
            modalType="form"

          />
        }
        {openShipping && 
          <BusinessModal
            setModalOpen={setOpenShipping}
            modalBody={<ChangeShipping setModalOpen ={setOpenShipping} />}
            modalType="form"

          />
        }

        {openDelivery && 
          <BusinessModal
            setModalOpen={setOpenDelivery}
            modalBody={<ChangeMethod setModalOpen ={setOpenDelivery} />}
            modalType="form"

          />
        }
        
        <div className="contact-info-items">
          {contactDetails.length === 0 ? <span>Loading...</span>
            :
            contactDetails.map(i => (
              <div key={i.id} className="contact-info-items-el" >

                <span className='contact-info-items-el-1'>{i.title}</span>
                <span className='contact-info-items-el-2'>{i.name}</span>
                <span className='contact-info-items-el-3'
                  onClick={() => handleChange(i.title)}
                >
                  Change
                </span>
                
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default ContactDetails