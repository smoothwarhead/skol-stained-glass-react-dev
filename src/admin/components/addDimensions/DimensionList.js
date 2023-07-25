import Dimension from "./Dimension";
import '../../../styles/adminStyles/AddItems.css'




const DimensionList = ({ dimensions, removeDimension }) => {


    

    return ( 
        <>
            <div className="item_list">
                {dimensions.map((item, index) => (
                    <Dimension key={index} newDimension={item} removeDimension={removeDimension} />
                ))}
            </div>
        </>
     );
}
 
export default DimensionList;