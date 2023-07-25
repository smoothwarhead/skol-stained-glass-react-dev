import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products from './pages/business-products/Products';
import CreateAccount from './pages/CreateAccount';
import SignIn from './admin/pages/account/SignIn';
import Dashboard from './admin/pages/Dashboard';
import Staffs from './admin/pages/Staffs';
import Orders from './admin/pages/orders/Orders';
import Transactions from './admin/pages/Transactions';
import AdminProducts from './admin/pages/products/AdminProducts';
import DashboardLayout from './layouts/DashboardLayout';
import BusinessDataProvider from './context/BusinessDataContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <BusinessDataProvider>

            <Route path="/" element={ <Layout /> }> 

              <Route path="/" element={ <Products /> } /> 
              <Route path="/register" element={ <CreateAccount /> } /> 


              
            </Route>

          </BusinessDataProvider>


          <Route path="/access-auth/business/account" element={ <SignIn /> } /> 





          <Route path="/access-auth/business/admin" element={ <DashboardLayout /> }>

            <Route index element={ <Dashboard /> } /> 
            <Route path="staffs" element={ <Staffs /> } /> 
            <Route path="products" element={ <AdminProducts /> } /> 
            <Route path="orders" element={ <Orders /> } /> 
            <Route path="transactions" element={ <Transactions /> } /> 

          </Route>



        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
