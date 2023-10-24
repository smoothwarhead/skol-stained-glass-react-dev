import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import '../../styles/navbar.css';
import AccountSlide from '../slides/AccountSlide';
import logo from '../../images/Logo.png';
import { navItems } from './navItems';
import CartSlide from '../slides/CartSlide';
import SearchSlide from '../slides/SearchSlide';
import NavContext from '../../context/NavContext';
import MenuSlide from '../slides/MenuSlide';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BusinessDataContext } from '../../context/BusinessDataContext';



const Navbar = () => {

  const {setSlideAccount, setSlideMenu, slideSearch, setSlideCart, setSlideSearch, isDark, setIsDark} = useContext(NavContext);

  const { cartItems } = useContext(BusinessDataContext);

  const [totalItems, setTotalItems] = useState(0);
  
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes("register") || location.pathname.includes("checkout")){
      setIsDark(false);
    }
    else{
      setIsDark(true);
    }
  }, [location, setIsDark])

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

  const handleSearchClick = () => {
    
    setSlideSearch(!slideSearch);

  }

  const handleMenuClick = () => {
    
    setSlideMenu(true);

  }


  const isMax540 = useMediaQuery('(max-width: 540px)');
  const isMin0 = useMediaQuery('(min-width: 0px)');

  useEffect(() => {

    const numOfItems = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.itemQuantity, 0);

    setTotalItems(numOfItems);

  }, [cartItems]);

 

 
  return (
    <>
      <AccountSlide />
      <CartSlide  />
      <SearchSlide />
      <MenuSlide />

      <div className={`navbar ${isDark ? "" : "light-nav"}`}>
        <div className="wrapper">
          <div className="left-el">
              <Link to="/">
                <div className="logo-container">

                  <div className="logo-img">
                    <img src={logo} alt="Logo" />

                  </div>
                  <div className={isDark ? "comp-name isDark" : "comp-name isLight"}>Skol Stained Glass</div>

                </div>
              </Link>
          </div>

          <div className={`right-el ${isDark ? "isDark" : "isLight"}`}>

            <div className="nav-el nav-el-1">

              <div className="nav-el-container-1">

                <div className="nav-el-1-links account-link" onClick={handleAccountClick}>
                  Account
                </div>

                <div className="nav-el-1-links search-link" onClick={handleSearchClick}>Search</div>

                <div className="nav-el-1-links cart-link" onClick={handleCartClick}>{`Cart (${totalItems})`}</div>
                
              </div>
  
            </div>


            <div className="nav-el nav-el-2">
              <div className={isDark ? "nav-el-container-2 isDark" : "nav-el-container-2 isLight"}>
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

         
          
          


      </div>


      <div className={`mobile-navbar ${isDark ? "" : "light-nav"}`}>

        <div className="wrapper">
        
            
          <div className="mobile-menu-icon" onClick={handleMenuClick}>
            <GiHamburgerMenu className={isDark ? 'menu-icon isDark' : 'menu-icon isLight'} />
          </div>

          <div className="m-logo-container">

            
              <div className="mobile-logo">
                <Link to="/">
                  <div className="m-logo-img">
                    <img src={logo} alt="Logo" />

                  </div>
                  <div className={isDark ? "m-comp-name isDark" : "m-comp-name isLight" }>Skol Stained Glass</div>
                </Link>

              </div>
          </div>
          

          <div className={isDark ? "mobile-nav-el isDark" : "mobile-nav-el isLight"}>
            <div className="mobile-nav-el-links m-account-link" onClick={handleAccountClick}>
              Account
            </div>

            <div className="mobile-nav-el-links m-search-link" onClick={handleSearchClick}>
              {/* Search */}
              {isMax540 && isMin0 ? <FaSearch className='m-search-icon'/> : "Search"}
            </div>

            <div className="mobile-nav-el-links m-cart-link" onClick={handleCartClick}>
              {/* Cart (0) */}
              {isMax540 && isMin0 ? <HiOutlineShoppingCart className='m-cart-icon'/> : "Cart " }
              <span>{`(${totalItems})`}</span>
            </div>
            
          </div>

          

        </div>


      </div>

    </>
  )
}

export default Navbar;