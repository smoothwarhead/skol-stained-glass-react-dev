const FlatButton = ({ name, cName, action }) => {
    return ( 
        <>
            <div onClick={action} className={`flat_btn ${cName}`}>{name}</div>
        </>
     );
}
 
export default FlatButton;