import AdminProductCard from './AdminProductCard'
import '../../../styles/adminStyles/productGrid.css';



const ProductGrid = ({ products }) => {
  return (
    <div className="admin-products-container">
        {
            products.map((product, index) => (
                <AdminProductCard product={product} key={index} />
            ))
        }
    </div>
  )
}

export default ProductGrid