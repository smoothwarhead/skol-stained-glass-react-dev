import { useContext } from 'react';
import './cart-item.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import { CartManager } from '../../files/CartManager';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';


const CartItem = (props) => {
    const { item } = props;

    const { cartItems, setCartItems } = useContext(BusinessDataContext);

    const handleQtyPlus = () => {

      const updatedCartItems = cartItems.map(c => {
        if((c.itemId === item.itemId) && (c.itemPrice === item.itemPrice) && (c.selectedDimension.DimensionId === item.selectedDimension.DimensionId)){
          
          const newItem = {...item, itemQuantity: item.itemQuantity + 1};


          return newItem;
          
        }else{
          return c;
        }
      })

      setCartItems(updatedCartItems);
      CartManager.updateCart(updatedCartItems);


    }


    const handleQtyMinus = () => {

      const newCartItems = cartItems.map(c => {
        if((c.itemId === item.itemId) && (c.itemPrice === item.itemPrice) && (c.selectedDimension.DimensionId === item.selectedDimension.DimensionId)){
          
          
          
          const newItem = {...item, itemQuantity: item.itemQuantity - 1};

          return newItem;
          
        }else{
          return c;
        }

      });

      const updatedCartItems = newCartItems.filter(n => n.itemQuantity !== 0);

      setCartItems(updatedCartItems);
      CartManager.updateCart(updatedCartItems);




    }


    

    const removeItem = () => {
      const newCartItems = cartItems.filter(c => (c.itemId !== item.itemId) && (c.itemPrice !== item.itemPrice) && (c.selectedDimension.DimensionId !== item.selectedDimension.DimensionId));

      

      setCartItems(newCartItems);
      CartManager.updateCart(newCartItems);
    }


    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
          cloudName: 'greenietec'
      }
    }); 

    const productImage = cld.image(item.imageUrl);




  return (
    <>
      <div className="cart-item-con">
        <div className="cart-item-left">
          <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />
          
        </div>

        <div className="cart-item-middle">
          <div className="item-name">{item.itemName}</div>
          <div className="item-dim">{item.selectedDimension.DimensionName}</div>
          <div className="item-price">{`$${item.itemPrice}`}</div>

          <div className="middle-btns">

            <div className="qty-con cart-qty-con">
                <span 
                  className="qty-minus-btn" 
                  onClick={handleQtyMinus}
                >
                    <HiMinus />
                </span>

                <span className="qty-text">{item.itemQuantity}</span>

                <span 
                  className="qty-plus-btn" 
                  onClick={handleQtyPlus}
                >
                    <HiPlus />
                </span>

            </div>

            <div className="item-remove-btn" onClick={removeItem}>Remove</div>

          </div>
          
        </div>

        <div className="cart-item-right">
          <span className="item-total-price">
            {`$${(parseFloat(item.itemPrice).toFixed(2) * parseInt(item.itemQuantity)).toFixed(2).toString()}`}
          </span>
        </div>

      </div>
    </>
  )
}

export default CartItem;