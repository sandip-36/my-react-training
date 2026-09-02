const Errormessage = function({array}){
    return(
        <>
        {array.length === 0 && <h4>The food cart is empty</h4>}
        </>
    )
}

export default Errormessage;
