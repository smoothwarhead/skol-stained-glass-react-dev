import React, { useContext } from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'
import useFetch from '../../hooks/useFetch'
import { BusinessDataContext } from '../../context/BusinessDataContext';


// const URL = 

const Products = () => {

  const {data: products} = useFetch();

  const { pending } = useContext(BusinessDataContext);


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