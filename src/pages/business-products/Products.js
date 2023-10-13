import React, { useContext, useEffect } from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'
import useFetch from '../../hooks/useFetch'
import { BusinessDataContext } from '../../context/BusinessDataContext';
import Product from '../../components/product/Product'


const URL = "/products"

const Products = () => {
  // const data = []

  const {data} = useFetch(URL);

  const { pending, setBusinessProducts } = useContext(BusinessDataContext);

  useEffect(() => {
    if(data.length === 0 ){
      return;
    } 
    console.log(data);
    setBusinessProducts(data);
  }, [data, setBusinessProducts]);


  return (
    <>
        <MainLayout>

          <div className="product-page-con">

            {pending && <Loader />}

            <div className="bus-prdt-con">
              {
                
                data.length === 0 ? 

                <div className="prod-loader">
                  <Loader /> 

                </div>
                : 
                data.map((product, i) => (
                  <Product
                    key={i}
                    product={product}
                  
                  />
                ))


              }
            </div>


          </div>
        

          

        </MainLayout>
    
    </>
  )
}

export default Products