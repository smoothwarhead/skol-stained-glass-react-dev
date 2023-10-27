import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products from './pages/business-products/Products';
import CreateAccount from './pages/CreateAccount';
import SignIn from './admin/pages/account/SignIn';
// import Dashboard from './admin/pages/Dashboard';
// import Staffs from './admin/pages/Staffs';
// import Orders from './admin/pages/orders/Orders';
// import Transactions from './admin/pages/Transactions';
// import AdminProducts from './admin/pages/products/AdminProducts';
import DashboardLayout from './layouts/DashboardLayout';

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
            <Route path="/products/:id" element={ <SelectedBusinessProduct /> } /> 
            <Route path="/checkout" element={ <Checkout /> } /> 


            
          </Route>


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
