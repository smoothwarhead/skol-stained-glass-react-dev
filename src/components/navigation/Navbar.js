import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import AccountSlide from '../slides/AccountSlide';
import Logo from './Logo';
import { navItems } from './navItems';
import CartSlide from '../slides/CartSlide';
import SearchSlide from '../slides/SearchSlide';
import NavContext from '../../context/NavContext';

const Navbar = () => {

  const {setSlideAccount, slideSearch, setSlideCart, setSlideSearch} = useContext(NavContext);
  

  const handleAccountClick = () => {
    if(slideSearch){
      setSlideSearch(false);
    }

    setSlideAccount(true);

  }

  const handleCartClick = () => {
    if(slideSearch){
      setSlideSearch(false);
    }

    setSlideCart(true);

  }


 
  return (
    <>
      <AccountSlide />
      <CartSlide  />
      <SearchSlide />

      <div className='navbar'>

          <div className="left-el">
              <div className="logo-container">

                <Logo cName="nav-logo"/>

              </div>
          </div>
          
          <div className="right-el">

            <div className="nav-el nav-el-1">

              <div className="nav-el-container-1">

                <div className="nav-el-1-links account-link" onClick={handleAccountClick}>
                  Account
                </div>

                <div className="nav-el-1-links search-link" onClick={() => setSlideSearch(!slideSearch)}>Search</div>

                <div className="nav-el-1-links cart-link" onClick={handleCartClick}>Cart (0)</div>
                
              </div>
  
            </div>


            <div className="nav-el nav-el-2">
              <div className="nav-el-container-2">
                {
                  navItems.map((item, index) => (
                    <NavLink
                      to={item.to}
                      key={index}
                    >
                      {item.name}
                    </NavLink>
                  ))
                }
              </div>
            </div>
          </div>


      </div>
    </>
  )
}

export default Navbar;