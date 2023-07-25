import { useState, useCallback  } from "react";

const DimensionForm = ({ addItem, error, dimension }) => {

    
    const[newDimension, setNewDimension] = useState({
        DimensionId: "",
        DimensionName: ""
    });

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);

    const isValid = dimension.length > 0;
    


    const handleTouched = () => {
        setFocused(false);
        setTouched(true);
    
    }
    
    const handleFocus = () => {
        setFocused(true);
        
    }
  

    const handleItemChange = useCallback(e => {
        const value = e.target.value;
        setNewDimension({ ...newDimension, DimensionName: value})
    }, [newDimension]);


    const handleSubmit = (e) => {

        if(e.key === 'Enter'){

            e.preventDefault();
            const id = Math.floor(Math.random() * 10000);
    
            
            if(newDimension.DimensionName.trim()){
    
                addItem({ ...newDimension, DimensionId: id});
    
                // reset task input
                setNewDimension({ ...newDimension, DimensionName: ""});
                
            }

        }


    }


    return ( 
        <>
            <div className='product-input-control'>
                <label className="product-input-lbl">{'Dimensions (Required)'}</label>

                <span className="product-input-hint">Type a value and hit Enter</span>

                <input 
                    type="text"
                    className={`product-input ${(focused) ? "focused" : (touched && !isValid) || (error && !isValid) ? "inp-error" : ""}`}
                    name="dimension"
                    value={newDimension.DimensionName}
                    onChange={handleItemChange}
                    onKeyDown={handleSubmit}
                    onBlur={handleTouched}
                    onFocus={handleFocus}
                    
                />

                { (touched && !isValid) || (error && !isValid) ? <span className="product-inp-error-msg">At least a dimension is required</span> : <div></div> }


            </div>
        
        </>
     );
}
 
export default DimensionForm;