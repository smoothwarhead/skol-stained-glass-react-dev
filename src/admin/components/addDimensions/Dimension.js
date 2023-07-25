import { HiOutlineX } from 'react-icons/hi';

const Dimension = ({ newDimension, removeDimension }) => {

    const handleRemoveDimension = () =>{
        removeDimension(newDimension.id);
    }


    return (  
        <>
            <div className="one-item">

                <div className='item-name'>
                    {newDimension.DimensionName}
                </div>

                <div className="item-cancel"  onClick={handleRemoveDimension} >
                    <HiOutlineX className="item-cancel-icon" />

                </div>

            </div>
        </>
    );
}
 
export default Dimension;