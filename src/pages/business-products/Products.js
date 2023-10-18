import React, { useContext, useEffect } from 'react'
import './products.css'
import MainLayout from '../../layouts/MainLayout'
import Loader from '../../components/loader/Loader'
// import useFetch from '../../hooks/useFetch';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import Product from '../../components/product/Product'


// const URL = "/products";

const Products = () => {

  const { businessProducts, setBusinessProducts } = useContext(BusinessDataContext);

  


  useEffect(() => {

    const data = [


      {
        "ProductId": "74e7fa21-90b2-418d-2b20-08db87939e49",
        "ProductName": "Puppy lover",
        "ProductDescription": "Puppies are cute, require training, and have an extra dose of playfulness and goofiness compared to older dogs that make them extra fun for some people.",
        "Quantity": "1",
        "UnitPrice": 10.4,
        "ImageUrl": "skol-stained-glass/ypvawwldect4kvom7zen",
        "CreatedDate": "2023-07-18T08:33:48.8259303",
        "ModifiedDate": "2023-07-18T08:33:48.8261464",
        "ProductSlug": "puppy-lover",
        "Dimensions": [
            {
                "DimensionId": "7095",
                "DimensionName": "12 x 12"
            }
        ]
    },
    {
        "ProductId": "624e9836-eb7f-44d3-c96b-08db86eb1e7c",
        "ProductName": "Tape recorder",
        "ProductDescription": "Join our growing team! We are looking for motivated individuals who want to further their career in warehousing with Capstone Logistics. Capstone Logistics, is part of The Transportation and Logistics industry which has been designated a \"Critical Infrastructure Segment\", our associates are Essential.",
        "Quantity": "4",
        "UnitPrice": 5,
        "ImageUrl": "skol-stained-glass/ilouxvz1kptd4qcvpscg",
        "CreatedDate": "2023-07-17T12:27:38.9694913",
        "ModifiedDate": "2023-07-17T12:27:38.969641",
        "ProductSlug": "tape-recorder",
        "Dimensions": [
            {
                "DimensionId": "5078",
                "DimensionName": "12 x 12"
            }
        ]
    },
    {
      "ProductId": "a3a9d4f7-5171-4fd2-fce8-08db8796afd3",
      "ProductName": "Beautiful fern",
      "ProductDescription": "The Beautiful Wood Fern, Dryopteris pulcherrima, is a recent variety of fern, commonly used for ornamental purposes. ",
      "Quantity": "6",
      "UnitPrice": 30.2,
      "ImageUrl": "skol-stained-glass/ybr5unaj6qkghp1dszxu",
      "CreatedDate": "2023-07-18T08:55:46.7514773",
      "ModifiedDate": "2023-07-18T08:55:46.7516381",
      "ProductSlug": "beautiful-fern",
      "Dimensions": [
          {
              "DimensionId": "7307",
              "DimensionName": "8 x 9"
          }
      ]
    },
    {
      "ProductId": "b7359c3b-4c7d-406e-d6eb-08db885c14a8",
      "ProductName": "Dog glass",
      "ProductDescription": "Rex Specs are protective dog goggles designed for the active and working dog. Protect your dog's eyes from the elements with Rex Specs!",
      "Quantity": "2",
      "UnitPrice": 17.36,
      "ImageUrl": "skol-stained-glass/bhhfkguk0blyqzwnlrcg",
      "CreatedDate": "2023-07-19T08:28:46.7751121",
      "ModifiedDate": "2023-07-19T08:28:46.7752663",
      "ProductSlug": "dog-glass",
      "Dimensions": [
          {
              "DimensionId": "3022",
              "DimensionName": "8 x12"
          }
      ]
    },
    {
      "ProductId": "52fafe5c-f1cf-4cfe-8ef1-08db885d2b7c",
      "ProductName": "Turtle glass",
      "ProductDescription": "Cutler and Gross optical glasses in dark turtle is an iconic, timeless aviator frame. Shop Cutler and Gross with complimentary delivery.",
      "Quantity": "2",
      "UnitPrice": 32.99,
      "ImageUrl": "skol-stained-glass/mxuuoque9zgtivodi8xn",
      "CreatedDate": "2023-07-19T08:36:34.5651816",
      "ModifiedDate": "2023-07-19T08:36:34.5653688",
      "ProductSlug": "turtle-glass",
      "Dimensions": [
          {
              "DimensionId": "1057",
              "DimensionName": "12 x 12"
          },
          {
              "DimensionId": "1639",
              "DimensionName": "24 x 12"
          },
          {
              "DimensionId": "1862",
              "DimensionName": "18 x 12"
          }
      ]
    }
    ];


    console.log(data);
    setBusinessProducts(data);

  }, [setBusinessProducts]);


  // const {data} = useFetch(URL);

  // const { pending, setBusinessProducts } = useContext(BusinessDataContext);

  // useEffect(() => {
  //   if(data.length === 0){
  //     return;
  //   } 
  //   console.log(data);
  //   setBusinessProducts(data);
  // }, [data, setBusinessProducts]);



  return (
    <>
        <MainLayout>

          <div className="product-page-con">

            {/* {pending && <Loader />} */}

            <div className="bus-prdt-con">
              {
                
                businessProducts.length === 0 ? 

                <div className="prod-loader">
                  <Loader /> 

                </div>
                : 
                businessProducts.map((product, i) => (
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