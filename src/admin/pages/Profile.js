import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import '../../styles/adminStyles/profile.css';
import { AuthContext } from '../../context/AuthContext';
import ProfileProfileCard from '../components/cards/ProfileProfileCard';
import ProfileContactCard from '../components/cards/ProfileContactCard';
import ProfileAddressCard from '../components/cards/ProfileAddressCard';



const noDataMsg = "Unable to retrieve your profile at the moment"
const Profile = () => {



    const {user} = useContext(AuthContext);
    // const { apppAdmin, setAppAdmin } = useContext(DataContext);

    

    const {data: admin } = useFetch(`/access-auth/business/admin/profile/${user}`);

    // useEffect(() => {
    //     set
    // })



  return (
    <>
        <div className="dash-page">

            {
                admin === null ? <span className="no-data">{noDataMsg}</span>
                :

        
                <>
                    <div className="profile-el profile-section">
                        <ProfileProfileCard title="Profile" admin={admin}/>
                    </div>



                    <div className="profile-el contact-section">

                        <ProfileContactCard title="Contact" admin={admin}/>


                    </div>

                    <div className="profile-el address-section">
                        <ProfileAddressCard title="Address" admin={admin} />
                    </div>

                </>


            }

            
        </div>
    </>
  )
}

export default Profile