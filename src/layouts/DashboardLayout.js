import { Navigate, Outlet } from 'react-router-dom';
import SideBar from '../admin/components/SideBar';
import TopBar from '../admin/components/TopBar';
import '../styles/adminStyles/dashboard.css';
import { Suspense, useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AuthContext } from '../context/AuthContext';
// import { DataContext } from '../context/DataContext';
import LoadingData from './LoadingData';
// import useError from '../hooks/useError';
import ErrorFallBack from '../components/ErrorFallBack';




const DashboardLayout = () => {

  const { loggedIn } = useContext(AuthContext);
  // const { pending } = useContext(DataContext);




  if(!loggedIn || loggedIn === null){
    return <Navigate to="/access-auth/business/account"/>
  }

 
  return (

    <ErrorBoundary 
      FallbackComponent={ <ErrorFallBack /> }
      onReset={() => {
        window.location.reload();
      }}
    
    >
      <Suspense fallback={<LoadingData />}>
        <>
          {/* {
            pending && <LoadingData />
          } */}
        
          
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
          
        
        </>

      </Suspense>

    </ErrorBoundary>
    
  )
}

export default DashboardLayout