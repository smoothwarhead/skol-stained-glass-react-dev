import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products from './pages/Products';
import CreateAccount from './pages/CreateAccount';
import SignIn from './admin/pages/account/SignIn';
// import Dashboard from './admin/pages/Dashboard';
// import Staffs from './admin/pages/Staffs';
// import Orders from './admin/pages/orders/Orders';
// import Transactions from './admin/pages/Transactions';
// import AdminProducts from './admin/pages/products/AdminProducts';
import DashboardLayout from './layouts/DashboardLayout';
import PersistLogin from './PersistLogin';
import AdminRequireAuth from './components/AdminRequireAuth';
import { lazy, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import SessionManager from './files/SessionManager';
import AddProducts from './admin/pages/products/AddProducts';
import EditProducts from './admin/pages/products/EditProducts';
// import Profile from './admin/pages/Profile';
// import LoadingData from './layouts/LoadingData';
// import useError from './hooks/useError';


const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const Staffs = lazy(() => import('./admin/pages/Staffs'));
const Profile = lazy(() => import('./admin/pages/Profile'));
const AdminProducts = lazy(() => import('./admin/pages/products/AdminProducts'));
const Orders = lazy(() => import('./admin/pages/orders/Orders'));
const Transactions = lazy(() => import('./admin/pages/Transactions'));
// const Transactions = lazy(() => import('./admin/pages/Transactions'));




function App() {

  const { loggedIn, setLoggedIn, setUser } = useContext(AuthContext);

  useEffect(() => {

    const isAuth = SessionManager.getAuth();

    if(isAuth){

      const currentUser = SessionManager.getUser()

      setLoggedIn(isAuth);

      setUser(currentUser);

    }


  }, [setLoggedIn, loggedIn, setUser])


  return (
    <div className="App">
      <BrowserRouter>

        


        
        {/* customer routes */}



        <Routes>

          <Route path="/" element={ <Layout /> }> 

            {/* public routes */}
            <Route path="/" element={ <Products /> } /> 
            <Route path="/register" element={ <CreateAccount /> } /> 


            
          </Route>



          {/* Admin public routes */}

          <Route path="/access-auth/business/account" element={ <SignIn /> } /> 




          {/* admin private routes */}

          <Route element={<PersistLogin />}> 
                

                <Route path="/access-auth/business/admin" element={ <DashboardLayout /> }>

                  <Route element={<AdminRequireAuth allowedRoles={["SuperAdmin", "Staff"]} />}>

                    <Route index element={ <Dashboard /> } />                   
                    <Route path="products" element={ <AdminProducts /> } /> 
                    <Route path="orders" element={ <Orders /> } /> 
                    <Route path="transactions" element={ <Transactions /> } /> 
                    <Route path="profile/:id" element={ <Profile /> } /> 
                    <Route path="products/add-product" element={ <AddProducts /> } /> 
                    <Route path="products/edit-product/:id" element={ <EditProducts /> } /> 
                  
                  </Route>



                  <Route element={<AdminRequireAuth allowedRoles={["SuperAdmin"]} />}>
                  
                    <Route path="staffs" element={ <Staffs /> } />                   
                  
                  </Route>



                </Route>            
             

          </Route>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
