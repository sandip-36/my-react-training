let Items = (props) => {

    const handleButton = (food) => {
        console.log(`${food} item is baught`)
    }

    return(<>
    <li className="list-group-item">{props.food} 

        <button 
        type="submit" className="btn btn-success float-end"
        onClick={() => handleButton(props.food)
        }>
        Buy</button>
    </li>
    </>
    );
}

export default Items;