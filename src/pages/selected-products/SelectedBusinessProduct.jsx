import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import MainLayout from '../../layouts/MainLayout';
import './selected-products.css';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import Loader from '../../components/loader/Loader';
import BusinessProductDetails from '../../components/product-details/BusinessProductDetails';
// import { axiosPrivate } from '../../api/axios';
// import SessionManager from '../../files/SessionManager';
import NavContext from '../../context/NavContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileBusinessProductDetails from '../../components/product-details/MobileBusinessProductDetails';








const SelectedBusinessProduct = () => {

    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDimensions, setItemDimensions] = useState([]);
    const [itemDescription, setItemDescription] = useState([]);
    const [itemPrice, setItemPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [selectedDimension, setSelectedDimension] = useState({});


    const isMin0 = useMediaQuery('(max-width: 0px)');
    const isMax768 = useMediaQuery('(max-width: 768px)');
    


    const {handleCart } = useContext(BusinessDataContext);
    const {setSlideCart} = useContext(NavContext);



    const {id} = useParams();



    const { pending, setPending } = useContext(BusinessDataContext);

    const navigate = useNavigate();


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


        const filteredProduct = data.filter(prdt => prdt.ProductId === id);

        const product = filteredProduct[0];

        
                    
        setItemId(product.ProductId);
        setImageUrl(product.ImageUrl);
        setItemName(product.ProductName);
        setItemDescription(product.ProductDescription);
        // setItemQuantity(product.Quantity);
        // setItemPrice(product.UnitPrice);

        //map and set the current dimension;
        const mappedDimensions = product.Dimensions.map(d => {

            const newStr = d.DimensionName.split(' ');

            let sides = [];

            sides.push(parseInt(newStr[0]));
            sides.push(parseInt(newStr[2]));

            const dimensionArea = sides[0] * sides[1]
            return{                            
                area: dimensionArea,
                ...d
            }
           
           
        });


        const formattedDimensions = mappedDimensions.sort((a, b) => a.area - b.area).map((d, index)=> {

            const unitPrice = product.UnitPrice;

            if(index === 0)
            {
                return{
                    selected: true,
                    id: index,
                    price: unitPrice.toFixed(2),
                    ...d
                }
            }else if(index === 1){
                return{
                    selected: false,
                    id: index,
                    price: (unitPrice * 1.25).toFixed(2),
                    ...d
                }
            }                      
            
            else{
                return{
                    selected: false,
                    id: index,
                    price: (unitPrice * index * 0.75).toFixed(2),
                    ...d
                }

            }
        });

        setItemDimensions(formattedDimensions);
        setItemPrice(formattedDimensions[0].price);
        setSelectedDimension(formattedDimensions[0]);
        setPending(false);   




    }, [id, setPending])




    // useEffect(() => {


    //     const getData = async () => {


    //         try {

    //             let res = await axiosPrivate.get(`/products/${id}`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',                       
    //                 },
                    
    //             });

    //             setPending(true);

    //            console.log(res);

    //             if(res.status === 200){

    //                 const product = res.data;

                
                    
    //                 setItemId(product.ProductId);
    //                 setImageUrl(product.ImageUrl);
    //                 setItemName(product.ProductName);
    //                 setItemDescription(product.ProductDescription);
    //                 // setItemQuantity(product.Quantity);
    //                 // setItemPrice(product.UnitPrice);

    //                 //map and set the current dimension;
    //                 const mappedDimensions = product.Dimensions.map(d => {

    //                     const newStr = d.DimensionName.split(' ');

    //                     let sides = [];

    //                     sides.push(parseInt(newStr[0]));
    //                     sides.push(parseInt(newStr[2]));

    //                     const dimensionArea = sides[0] * sides[1]
    //                     return{                            
    //                         area: dimensionArea,
    //                         ...d
    //                     }
                       
                       
    //                 });


    //                 const formattedDimensions = mappedDimensions.sort((a, b) => a.area - b.area).map((d, index)=> {

    //                     const unitPrice = product.UnitPrice;

    //                     if(index === 0)
    //                     {
    //                         return{
    //                             selected: true,
    //                             id: index,
    //                             price: unitPrice.toFixed(2),
    //                             ...d
    //                         }
    //                     }else if(index === 1){
    //                         return{
    //                             selected: false,
    //                             id: index,
    //                             price: (unitPrice * 1.25).toFixed(2),
    //                             ...d
    //                         }
    //                     }                      
                        
    //                     else{
    //                         return{
    //                             selected: false,
    //                             id: index,
    //                             price: (unitPrice * index * 0.75).toFixed(2),
    //                             ...d
    //                         }

    //                     }
    //                 })

    //                 setItemDimensions(formattedDimensions);
    //                 setItemPrice(formattedDimensions[0].price);
    //                 setSelectedDimension(formattedDimensions[0]);

    //                 setPending(false);   

                    
    //             }else if(res.status === 204){
                    
                    
    //                 setPending(false);               

                    
    //             }else if(res.status === 401){
                    
    //                 SessionManager.removeUserSession();                  
                    
    //             }
    //             else{
    //                 throw Error("Could not fetch the data for that resource");
    //             }

                
    //         } catch (error) {

    //             setPending(false);  
    //             let msg;


    //             if(!error.response){

    //                 console.log(error);
    //                 msg =  "An error has occured"; 
    //                 return msg; 

    //             }else{


    //                 if(error.response.status === 400 || error){
                
    //                     msg =  error.response.data.Message; 
    //                     return msg;             
    //                 }
    
    //                 if(error.code === "ERR_BAD_REQUEST"){
                        
    //                     SessionManager.removeUserSession();
    
    //                     msg =  error.response.data.Message; 
    //                     return msg;   
                                    
    //                 }
    
    //                 if(error.response.status === 401){
    
    //                     // setLoggedIn(false);
    //                     SessionManager.removeUserSession();
                        
    //                     msg =  "User not authorized. Please provide the correct credential"; 
    //                     return msg;   
                                    
    //                 }
    
    //                 if(error.response.status === 403){
    
    //                     // setLoggedIn(false);   
    //                     SessionManager.removeUserSession();
                        
    //                     msg =  "User forbidden to view this page. Please provide the correct credential"; 
    //                     return msg; 
    
    
    //                 }
    
    //                 if(error.response.status === 404){
                    
    //                     msg =  "This page can not be found"; 
    //                     return msg; 
                        
    //                 }
    
    //                 if(error.response.status === 500){
                        
    //                     msg =  "This is an invalid request"; 
    //                     return msg; 
                        
    //                 }
    
    //                 if(error.response.status === 503 || error.code === "ERR_NETWORK"){
                    
    //                     msg =  "Inconsistent network !!!"; 
    //                     return msg;
                        
    //                 }

    //             }
                



    
               
                
    //         }

            
    
    //     }

    //     getData();

    // }, [id, setPending]);


    // useEffect(() => {
        

    //     const numOfItems = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.itemQuantity, 0);

    //     console.log(numOfItems);

    // }, [cartItems, itemDimensions]);


    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 
  
    const productImage = cld.image(imageUrl);
    //const productImage = cld.image(product.ImageUrl);


    const addToCart = () => {
        const item = {
            itemId,
            itemName,
            selectedDimension,
            itemQuantity,
            itemPrice,
            imageUrl

        }

        handleCart(item);
        setSlideCart(true);

    }

  
   


  return (
    <MainLayout>
        <div className="product-page-con">

            {pending && <Loader />}

            <div className="bus-product-details-con">
                <div className="all-product-btn" onClick={() => navigate(-1)}>
                    <HiOutlineArrowNarrowLeft className='all-product-icon' />
                    <span className='all-product-text'>All Products</span>

                </div>

               

                <div className="bus-product-details">

                    { (!isMax768 && !isMin0) ?

                        <>
                            
                            <div className="images-preview">
                                <div className="images-preview-img">
                                    <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />

                                </div>
                            </div>

                            <div className="product-image-pre-con">
                                <div className="product-image-pre-img">
                                    <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />

                                </div>
                            </div>

                            <div className="main-product-details-con">
                                <BusinessProductDetails 

                                    itemId = {itemId}
                                    itemName = {itemName}
                                    itemDimensions = {itemDimensions}
                                    itemDescription = {itemDescription}
                                    itemPrice = {itemPrice}
                                    setItemDimensions={setItemDimensions}
                                    setItemPrice={setItemPrice}
                                    itemQuantity={itemQuantity}
                                    setItemQuantity={setItemQuantity}
                                    addToCart={addToCart}
                                    setSelectedDimension={setSelectedDimension}
                                    
                                />
                            </div>

                        </>

                        :

                        <MobileBusinessProductDetails
                        
                            itemId = {itemId}
                            itemName = {itemName}
                            itemDimensions = {itemDimensions}
                            itemDescription = {itemDescription}
                            itemPrice = {itemPrice}
                            setItemDimensions={setItemDimensions}
                            setItemPrice={setItemPrice}
                            itemQuantity={itemQuantity}
                            setItemQuantity={setItemQuantity}
                            addToCart={addToCart}
                            setSelectedDimension={setSelectedDimension}
                            productImage={productImage}

                        />
                    }
                    
                </div>

                   




                

            </div>

        </div>

    </MainLayout>
  )


}




export default SelectedBusinessProduct;