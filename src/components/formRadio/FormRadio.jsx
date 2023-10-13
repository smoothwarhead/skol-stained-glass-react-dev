
import './form-radio.css'

const FormRadio = (props) => {

    const { method, handleRadioSelect, icon, hasSub, element } = props;

    // const [showSub, setShowSub] = useState(false);

    const radioLeft = () => {
       

        if(method.hasOwnProperty('icon')){
            return icon;
        }
        else if(method.hasOwnProperty('price')){
           if(method.price === 0){
            return "Free"
           }else{
            return method.price.toFixed(2);
           }
        }else{
            return ""
        }
        

    }

    const handleSelect = () => {
        handleRadioSelect(method.id);
        // if(hasSub && method.selected){
        //     setShowSub(true);
        // }
    }




  return (
    <div className='radio-control'>
        <div className={`form-radio ${method.selected ? "radio-selected" : ""}`}
            onClick={handleSelect}
        >

            <div className='form-radio-els'>

                <div className="form-radio-el-1">
                    <div className="radio-circle-outer">
                        <div className={`radio-circle-inner ${method.selected ? "selected" : ""}`}>                
                        </div>
                    </div>
                </div>

                <div className="form-radio-el-2">
                    <div className="radio-text-1">
                        {method.method}
                    </div>

                    <div className="radio-text-2"> 
                        {method.duration}               
                    </div>
                </div>

                <div className="form-radio-el-3">
                    <div className="radio-left">
                        {icon ? 

                            <span className='icon-img'>
                                <img src={icon} alt="icon" />
                            </span>

                            :

                            radioLeft()                
                        }
                    </div>
                </div>

            </div>


        </div>

        {
           (hasSub && method.selected) &&

            <div className="sub-container">

                {element}
                
            </div>

        }

    </div>
  )
}

export default FormRadio