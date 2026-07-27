
const Container = (props) => {
    return(
        <>
        <div className="container-food">
        {props.children}
        </div>
        </>
    )
}

export default Container;