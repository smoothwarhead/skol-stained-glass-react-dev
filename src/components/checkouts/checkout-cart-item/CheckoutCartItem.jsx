import './checkout-cart-item.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { crop } from '@cloudinary/url-gen/actions/resize';












const CheckoutCartItem = (props) => {

   const {item} = props;


    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'greenietec'
        }
    }); 

    const productImage = cld.image(item.imageUrl);

    productImage
    .resize(crop())

    const imageStyle = {
        maxWidth: '100%', 
        maxHeight: '100%',
    }

  return (
    <div className="checkout-cart-item-con">

        <div className="checkout-cart-item-left">
            <span className='checkout-item-qty'>{item.itemQuantity}</span>


          <div className="checkout-cart-img-con">
            <div className="checkout-cart-img-con-inner">
                <AdvancedImage style={imageStyle} cldImg={productImage} />

            </div>
          </div>
          
        </div>

        <div className="checkout-cart-item-middle">
          <div className="checkout-item-name">{item.itemName}</div>
          <div className="checkout-item-dim">{item.selectedDimension.DimensionName}</div>


          {/* <span className="checkout-qty-text">{item.itemQuantity}</span> */}
          
          
        </div>

        <div className="checkout-cart-item-right">
          <span className="checkout-item-total-price">
            {`$${(parseFloat(item.itemPrice).toFixed(2) * parseInt(item.itemQuantity)).toFixed(2).toString()}`}
          </span>
        </div>


    </div>
  )
}

export default CheckoutCartItem;