function Random(){
    let number = Math.random() * 100
    return(
        <>
        <h1>here is my random no : {Math.round(number)}</h1>
        </>
    )
}

export default Random;