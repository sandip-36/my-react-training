function Random(){
    let num = Math.random() * 100;

    return <h4 style={{'background-color' : '#000000'}}>{Math.round(num)} This is the random number</h4>
}


export default Random