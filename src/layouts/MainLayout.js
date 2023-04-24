import React from 'react'

import '../App.css'
import Navbar from '../components/navigation/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className='main-page'>

        <div className="nav-section">
          <Navbar />
        </div>


        <div className="body-section">
            {children}
        </div>
    </div>
  )
}

export default MainLayout;