import { Outlet } from 'react-router-dom';
import SideBar from '../admin/components/SideBar';
import TopBar from '../admin/components/TopBar';
import '../styles/adminStyles/dashboard.css';

const DashboardLayout = () => {
  return (
    <div className='admin-page'>

        <div className="top-section">
            <TopBar />
        </div>


        <div className="admin-body-section">
            <Outlet />
        </div>

        <div className="side-section">
          <SideBar />
            
        </div>
    </div>
  )
}

export default DashboardLayout