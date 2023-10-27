import { useContext } from "react";
import { useLocation, Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SessionManager from "../files/SessionManager";



function AdminRequireAuth({ allowedRoles }) {
    const { user } = useContext(AuthContext);
    const userRole = SessionManager.getRole();
    const location = useLocation();


    const checkAuth = () => {
      
      if(user){
        if(allowedRoles.find(role => userRole === role)){
          return <Outlet />
        }else{
          return <Navigate to="/denied" state={{ from: location}} replace />
        }

      }else{
        return <Navigate to="/access-auth/business/account" state={{ from: location}} replace />
      }
    }
  return (
    checkAuth()
  
  )
}

export default AdminRequireAuth;