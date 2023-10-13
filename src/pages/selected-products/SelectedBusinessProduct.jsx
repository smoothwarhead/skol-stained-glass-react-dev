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
import { axiosPrivate } from '../../api/axios';
import SessionManager from '../../files/SessionManager';
import NavContext from '../../context/NavContext';








const SelectedBusinessProduct = () => {

    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDimensions, setItemDimensions] = useState([]);
    const [itemDescription, setItemDescription] = useState([]);
    const [itemPrice, setItemPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [selectedDimension, setSelectedDimension] = useState({});


    const {cartItems, handleCart } = useContext(BusinessDataContext);
    const {setSlideCart} = useContext(NavContext);



    const {id} = useParams();



    const { pending, setPending } = useContext(BusinessDataContext);

    const navigate = useNavigate();



    useEffect(() => {


        const getData = async () => {


            try {

                let res = await axiosPrivate.get(`/products/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',                       
                    },
                    
                });

                setPending(true);

               console.log(res);

                if(res.status === 200){

                    const product = res.data;

                
                    
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
                    })

                    setItemDimensions(formattedDimensions);
                    setItemPrice(formattedDimensions[0].price);
                    setSelectedDimension(formattedDimensions[0]);

                    setPending(false);   

                    
                }else if(res.status === 204){
                    
                    
                    setPending(false);               

                    
                }else if(res.status === 401){
                    
                    SessionManager.removeUserSession();                  
                    
                }
                else{
                    throw Error("Could not fetch the data for that resource");
                }

                
            } catch (error) {

                setPending(false);  
                let msg;


                if(!error.response){

                    console.log(error);
                    msg =  "An error has occured"; 
                    return msg; 

                }else{


                    if(error.response.status === 400 || error){
                
                        msg =  error.response.data.Message; 
                        return msg;             
                    }
    
                    if(error.code === "ERR_BAD_REQUEST"){
                        
                        SessionManager.removeUserSession();
    
                        msg =  error.response.data.Message; 
                        return msg;   
                                    
                    }
    
                    if(error.response.status === 401){
    
                        // setLoggedIn(false);
                        SessionManager.removeUserSession();
                        
                        msg =  "User not authorized. Please provide the correct credential"; 
                        return msg;   
                                    
                    }
    
                    if(error.response.status === 403){
    
                        // setLoggedIn(false);   
                        SessionManager.removeUserSession();
                        
                        msg =  "User forbidden to view this page. Please provide the correct credential"; 
                        return msg; 
    
    
                    }
    
                    if(error.response.status === 404){
                    
                        msg =  "This page can not be found"; 
                        return msg; 
                        
                    }
    
                    if(error.response.status === 500){
                        
                        msg =  "This is an invalid request"; 
                        return msg; 
                        
                    }
    
                    if(error.response.status === 503 || error.code === "ERR_NETWORK"){
                    
                        msg =  "Inconsistent network !!!"; 
                        return msg;
                        
                    }

                }
                



    
               
                
            }

            
    
        }

        getData();

    }, [id, setPending]);


    useEffect(() => {

        console.log("dimensions", itemDimensions);
        console.log("cartItems", cartItems);

        

        const numOfItems = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.itemQuantity, 0);

        console.log(numOfItems);

    }, [cartItems, itemDimensions]);


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
                </div>
            </div>

        </div>

    </MainLayout>
  )


}




export default SelectedBusinessProduct;