import React from 'react'

import '../App.css'
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='main-page'>

        <div className="nav-section">
          <Navbar />
        </div>


        <div className="body-section">
            {children}
        </div>

        <div className="footer-section">
            <Footer />
        </div>
    </div>
  )
}

export default MainLayout;