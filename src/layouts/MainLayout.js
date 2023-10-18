import React, { useContext } from 'react'

import '../App.css'
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import NavContext from '../context/NavContext';

const MainLayout = ({ children }) => {

  const {slideAccount, slideCart, slideMenu, slideSearch} = useContext(NavContext);

  const checkSlide = slideAccount || slideCart || slideMenu || slideSearch;


  return (
    <div className={`main-page ${checkSlide ? "slide-open" : ""}`}>

      {/* <div className="nav-section">
        <Navbar />
      </div> */}

      <Navbar />


      <div className="body-section">
          {children}
      </div>

      <Footer />


      {/* <div className="footer-section">
          <Footer />
      </div> */}
      
    </div>
  )
}

export default MainLayout;