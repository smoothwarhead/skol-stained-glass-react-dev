import React, { useContext, useEffect } from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'
import useFetch from '../../hooks/useFetch'
import { BusinessDataContext } from '../../context/BusinessDataContext';


const URL = "/products"

const Products = () => {

  const {data: products} = useFetch(URL);

  const { pending, businessProducts, setBusinessProducts } = useContext(BusinessDataContext);

  useEffect(() => {
    setBusinessProducts(products);
  }, [products])


  return (
    <>
        <MainLayout>

          <div className="product-page-con">

            {pending && <Loader />}

            <div>Products</div>

          </div>
        

          

        </MainLayout>
    
    </>
  )
}

export default Products