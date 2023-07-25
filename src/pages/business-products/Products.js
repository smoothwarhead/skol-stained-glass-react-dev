import React from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'

const Products = () => {

  // const {data} = 
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