import { useParams } from "react-router-dom";
import SessionManager from "../../../files/SessionManager";
import { DataContext } from "../../../context/DataContext";
import useApi from "../../../hooks/useApi";
import { useContext, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { productInputs } from '../../../files/inputs';
import '../../../styles/adminStyles/addProducts.css';
import ProductInput from '../../components/ProductInput';
import DimensionForm from '../../components/addDimensions/DimensionForm';
import DimensionList from '../../components/addDimensions/DimensionList';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import ProductTextArea from '../../components/ProductTextArea';
import Modal from '../../components/Modal';
import ConfirmationPage from '../../components/ConfirmationPage';
import { useNavigate } from 'react-router-dom';
import ImageResizer from '../../../files/ImageResizer';
import { axiosPrivate } from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";






// const initialValues = {
//     productName: "",
//     description: "",
//     quantity: "",
//     unitPrice: "",
//     slug: "",
//     dimensions: [],
//     data: ""
// }



const EditProducts = () => {


  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [slug, setSlug] = useState("");
  const [dimensions, setDimensions] = useState([]);
  const [productImage, setProductImage] = useState("");
  const [editSlug, setEditSlug] = useState(false);

  const { selectedProduct, setModalOpen, message } = useContext(DataContext);
  const { setLoggedIn } = useContext(AuthContext);    

  const { editProduct } = useApi();



  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState({
    file:[],
  });

  const [showImage, setShowImage] = useState(false);
  const [showUploadBtn, setShowUploadBtn] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isEdit, setIsEdit] = useState(false);


  

  const navigate = useNavigate();


//   const handleChange = (e) => {

//     setValues({ ...values, [e.target.name]: e.target.value});   

//   }


  const handleProductName = (e) => {

    setProductName(e.target.value);
    setEditSlug(true);

  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value);

  }

  const handlePrice = (e) => {
    setUnitPrice(e.target.value);

  }



  const handleDescription = (e) => {
    setDescription(e.target.value);

  }

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
   

  }


  // image preview
  const imageHandler = (e) => {
    const selected = e.target.files[0];
    setFile({...file, file: selected});
    ImageResizer.editImageResizer(selected, setProductImage);

    // imageResizer(selected, formData, setFormData);


    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if(selected && ALLOWED_TYPES.includes(selected.type)){
        let reader = new FileReader();
        reader.onloadend = () => {
            setProfilePicture(reader.result);

        }
        reader.readAsDataURL(selected)
    } else {
        // setError(true);
        console.log("file not supported");
    }


  }










  
  const addItem = (newItem) => {
       
    // setValues({...values, dimensions: [newItem, ...values.dimensions]});
    setDimensions([...dimensions, newItem]);


  };

  const removeDimension = (id) => {

    // const removeItem = dimensions.filter(item => item.id !== id);
    const removeDimension = dimensions.filter(item => item.id !== id);      

    setDimensions(removeDimension);

      
  };



 


  const handleImageChange = () => {
    setIsChange(true);
    setShowImage(true);
    setShowActions(false);

  } 

  const handleOk = () => {
    setModalOpen(false);
    navigate("/access-auth/business/admin/products");
    // setProductReload(true);
    
  }


  const handleCloseModal = () => {
    setModalOpen(false);
  }




useEffect(() => {
      
    const getProduct = async () => 
    {
        setPending(true);
        setIsEdit(true);

        try {

            let res = await axiosPrivate.get(`/access-auth/business/admin/products/${id}`, {
                    withCredentials: true
                });

            console.log(res);

            if(res.status === 200){

                setPending(false);
                setProductName(res.data.ProductName);
                setDescription(res.data.ProductDescription);
                setDimensions(res.data.Dimensions);
                setSlug(res.data.ProductSlug);
                setUnitPrice(parseFloat(res.data.UnitPrice).toFixed(2).toString());
                setQuantity(res.data.Quantity);
                setProductImage(res.data.ImageUrl);

                    
            }
            
        } catch (error) {
            console.log(error);
                setPending(false);               
                

                let msg;


    
                if(error.response.status === 400){
                
                    msg =  error.response.data.Message; 
                    return msg;             
                }

                if(error.code === "ERR_BAD_REQUEST"){

                    setLoggedIn(false);
                    
                    SessionManager.removeUserSession();

                    msg =  error.response.data.Message; 
                    return msg;   
                                
                }

                if(error.response.status === 401){

                    setLoggedIn(false);
                    SessionManager.removeUserSession();
                    
                    msg =  "User not authorized. Please provide the correct credential"; 
                    return msg;   
                                
                }

                if(error.response.status === 403){

                    setLoggedIn(false);   
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

    getProduct();


}, [id, message, setLoggedIn]);

useEffect(() => {
    if((profilePicture && !isChange) || (isEdit && !isChange)){
      setShowImage(true);
      setShowUploadBtn(false);
    }else{
      setShowUploadBtn(true);
    }


}, [profilePicture, setShowImage, setShowUploadBtn, isChange, isEdit]);



const handleImageRemove = () => {
    setShowActions(false);

    if(isEdit){
        setProductImage("");
        return
    }else{
        setProfilePicture(null)
    }

} 



  
// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
    cloud: {
        cloudName: 'greenietec'
    }
}); 

// Use the image with public ID, 'bike'.
const myImage = cld.image(productImage);

// Scale the image to a width of 400 pixels.
myImage.resize(scale().width(250).height(245));



function hasEmptyKey(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === "") {
        return true;
      }
    }
    return false;
}


const saveProduct = () => {

    const fileData = {productName, description, quantity, unitPrice, dimensions, productImage, slug: productName?.split(" ").join("-").toLowerCase() };
    console.log(fileData);


    if(hasEmptyKey(fileData))
    {
      setError(true);
    }
    else{

      console.log(fileData);


      setPending(true);
    

    }

}



  return (

    <>
        <div className="dash-page">

            <div className="dash-top">
                <div className="add-product-title">Edit Product</div>

                <div className="dash-page-btns">

                    <Button 
                        hasIcon={false} 
                        btnText={pending ? "Saving":  "Save Product" }
                        action={saveProduct}
                        isActive={true}
                        Icon={null}

                    />

                </div>

            </div>

            <div className="add-product-container">


                <div className="add-product-el-container">


                    <div className="add-product-el add-product-el-1">

                        {/* image upload */}

                        <div className="image-upload-container">

                            <div className="product-input-lbl">{'Product Image (required)'}</div>

                            { showImage &&
                                <div className="img-section">

                                    <div 
                                    className="img-actions"
                                    onClick={() => setShowActions(!showActions)}
                                    
                                    >
                                        <BiDotsHorizontalRounded className='image-action-icon'/>
                                    </div>

                                    {showActions &&
                                    <div className="actions">
                                    <div 
                                        className="acts change-action"
                                        onClick={handleImageChange}
                                    >
                                        Change
                                    </div>

                                    <div 
                                        className="acts remove-action"
                                        onClick={handleImageRemove}

                                    >
                                        Remove
                                    </div>

                                    </div>
                                    }

                                    <div className="image-upload">

                                        {   
                                            (isEdit && !isChange) ? 

                                            <AdvancedImage cldImg={myImage} />
                                            :

                                            <img src={profilePicture} alt="" className="img" />

                                        
                                        }
                                    </div>

                                </div>
                            }
                            


                            { showUploadBtn &&
                                <div className="camera-container">
                                        <input type="file" id="input" name="profileImage" accept="image/*" onChange={imageHandler}/>
                                        <div className="upload-icon-con">
                                            <label htmlFor="input" className="image-upload-lbl">
                                                <BsFillCloudArrowUpFill className='upload-icon' />
                                            </label>
                                            
                                        </div>
                                </div>
                            }

                        </div>
                        { error && !profilePicture ? <span className="product-inp-error-msg">Product Image is required</span> : <div></div> }


                        
                    </div>




                    <div className="add-product-el add-product-el-2">



                        <ProductInput

                            inputType="text"
                            label="Product name (required)"   
                            value={productName} 
                            handleChange={handleProductName}  
                            errorMessage = "Product name is required."
                            name= "productName"
                            error = {error}
                            cName = "product-input"

                        />


                        <ProductInput

                            inputType="text"
                            label="Quantity (required)"   
                            value={quantity} 
                            handleChange={handleQuantity}  
                            errorMessage = "Quantity is required."
                            name= "quantity"
                            error = {error}
                            cName = "product-input"

                        />


                        <ProductInput

                            inputType="text"
                            label="Price (required)"   
                            value={unitPrice} 
                            handleChange={handlePrice}  
                            errorMessage = "Price is required."
                            name= "price"
                            error = {error}
                            cName = "product-input"

                        />


                        <ProductInput

                            inputType="text"
                            label="Product Slug (required)"   
                            value={editSlug ? productName?.split(" ").join("-").toLowerCase() : slug} 
                            handleChange={handleSlugChange}  
                            errorMessage = "Product Slug is required."
                            name= "slug"
                            hint = "This is set after the product name is entered."
                            error = {error}
                            cName = "product-input"

                        />

                        <ProductTextArea 

                            value={description} 
                            handleChange={handleDescription}
                            error={error}

                        />

                        <DimensionForm addItem={addItem} placeholder="Type a value and hit Enter" error={error} dimension={dimensions} />

                        <DimensionList 

                            dimensions={dimensions}
                            removeDimension={removeDimension }
                        
                        />


                    </div>
                    
                    




                </div>


            </div>



        </div>

    </>
    
      
  )
}

export default EditProducts;