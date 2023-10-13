
const Button = ({ cName, name, action }) => {




    const btnStyle = {
        width: '100%',
        height: 'fit-content',
        padding: '15px 10px',
        textAlign: 'center',
        cursor: 'pointer'
    }
  


// const makeActive = (name) => {
//     setActive(!active);
//     console.log(name.target.innerText);
// }


    return ( 
        <div onClick={action} style={btnStyle}  className={cName}>{name}</div>

       
     );
}
 
export default Button;