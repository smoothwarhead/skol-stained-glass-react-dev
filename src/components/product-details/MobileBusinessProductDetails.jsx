import {AdvancedImage} from '@cloudinary/react';
import './product-details.css';
import { HiMinus, HiPlus } from 'react-icons/hi';





const MobileBusinessProductDetails = (props) => {


    const {addToCart, itemName, productImage, itemQuantity, setItemQuantity, setItemDimensions, itemDimensions, itemDescription,  itemPrice, setItemPrice } = props;


    const handlePlus = () =>{
        setItemQuantity(itemQuantity + 1);
    }

    const handleMinus = () =>{
        
        if(itemQuantity === 1){
            return;
        }else{
            setItemQuantity(itemQuantity - 1);

        }
    }

    
    const selectDimension = (index) => {

        setItemDimensions(
            itemDimensions.map(d => {

                if(d.id === index){
                  
                    d.selected = true;
                    setItemPrice(d.price);


                }else{
                    d.selected = false;
                }

                
                return d;


                
            })
        );

        

        // console.log(index);
    };


  return (
    <div className="product-details-con">
        <div className="p-details-name">{itemName}</div>
        <div className="p-details-price">{`$${parseFloat(itemPrice).toFixed(2).toString()}`}</div>

        <div className="product-image-pre-con">
            <div className="product-image-pre-img">
                <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />

            </div>
        </div>


        <div className="p-details-dim-con">
            <span className="p-lbl">Dimensions:</span>
            <div className="dim-con">
                {
                    itemDimensions?.map((dim, i) => (
                        <span 
                            className={`dim-text ${dim.selected ? "dim-active" : ""}`} 
                            key={i} 
                            onClick={() => selectDimension(i)}

                        >
                            {dim.DimensionName}
                        </span>
                    ))
                }
            </div>
        </div>

        <div className="p-details-qty-con">
            <span className="p-lbl">Quantity:</span>
            <div className="qty-con">
                <span className="qty-minus-btn" onClick={handleMinus}>
                    <HiMinus />
                </span>

                <span className="qty-text">{itemQuantity}</span>

                <span className="qty-plus-btn" onClick={handlePlus}>
                    <HiPlus />
                </span>
            </div>

        </div>

        <div className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
        </div>

        <div className="product-description">
            {itemDescription}
        </div>


    </div>
  )
}

export default MobileBusinessProductDetails;