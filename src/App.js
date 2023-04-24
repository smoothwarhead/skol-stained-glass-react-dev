import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products from './pages/Products';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={ <Layout /> }> 

            <Route path="/" element={ <Products /> } /> 
            <Route path="/register" element={ <CreateAccount /> } /> 
          </Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
