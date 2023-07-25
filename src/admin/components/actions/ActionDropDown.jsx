import { useContext } from 'react'
import './action-dropdown.css'
import { DataContext } from '../../../context/DataContext'
import { useNavigate } from 'react-router-dom'



const ActionDropDown = ({ product }) => {

    const { message, setMessage, setDeleteMode } = useContext(DataContext);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/access-auth/business/admin/products/edit-product/${product.ProductId}`);

    }

    const handleDelete = () => {
        const msg = "Are you sure you want to delete this product?"
        setMessage({...message, body: msg, type: "error" });
        setDeleteMode(true);
    }

  return (
    <>
        <div className="action-d-con">

            <div className="action-links" onClick={handleEdit}>Edit</div>

            <div className="action-links" onClick={handleDelete}>Delete</div>

        </div>
    
    </>
  )
}

export default ActionDropDown