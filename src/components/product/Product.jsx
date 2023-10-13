import './product.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
// Import plugins
import {AdvancedImage, responsive} from '@cloudinary/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';











const Product = (props) => {

  const {product} = props;
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'greenietec'
  }
}); 

// Use the image with public ID, 'bike'.
const productImage = cld.image(product.ImageUrl);

// Scale the image to a width of 400 pixels.
// productImage
// .resize(scale().height(220).width(240))
// .format('auto')
// .quality('auto');


const handleClick = () => {
  navigate(`products/${product.ProductId}`)
}




  return (
    <div 
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      
      <div className={`product-card-con ${hovered ? "hovered" : ""}`}>
        <div className="product-card-img">
          <AdvancedImage style={{maxWidth: '100%', maxHeight: '100%'}} cldImg={productImage} />
        </div>

        <div className="product-card-name">{product.ProductName}</div>

        <div className="product-card-price">{`From $${parseFloat(product.UnitPrice).toFixed(2).toString()}`}</div>

      </div>

    </div>
  )
}

export default Product;