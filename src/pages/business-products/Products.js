import React from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const {data: products} = useFetch();


  return (
    <>
        <MainLayout>

          <div className="product-page-con">

            <Loader />

            <div>Products</div>

          </div>
        

          

        </MainLayout>
    
    </>
  )
}

export default Products