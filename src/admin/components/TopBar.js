import { FaUserCircle } from 'react-icons/fa';
import { RxCaretDown } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import useMediaQuery from '../../hooks/useMediaQuery';
import NavContext from '../../context/NavContext';
import { useContext } from 'react';
import AdminMenuSlide from '../../components/slides/AdminMenuSlide';


const TopBar = () => {

    const isMax540 = useMediaQuery('(max-width: 540px)');
    const isMin0 = useMediaQuery('(min-width: 0px)');

    const { setSlideAdminMenu } = useContext(NavContext);


  return (
    <>
        <AdminMenuSlide />
        <div className="top-bar">

            
        

            <div className="top-bar-con">

                <div className="mobile-section">
                    <GiHamburgerMenu className='menu-icon a-menu-icon' onClick={() => setSlideAdminMenu(true)}/>
                </div>

                <div className="top-1">
                    {
                        isMax540 && isMin0 ? <FaSearch className='a-search-icon'/> : 
                    
                        <input type="text" name="search" placeholder="Type here to search"/>

                    }

                </div>

                <div className="top-2">
                    <div className="user-details">
                        <div className="user-image">
                            <FaUserCircle className='user-placeholder' />
                        </div>

                        <div className="user-name">
                            Simeon Adewale
                        </div>

                        <div className="caret-icon">
                            <RxCaretDown />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default TopBar