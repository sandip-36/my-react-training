let Currentdate = function(){

    let date = new Date();

    return(
        <>
        <h2>here is curent date and time :{date.toLocaleDateString()} - {date.toLocaleTimeString()} </h2>
        </>
    )
}
export default Currentdate;