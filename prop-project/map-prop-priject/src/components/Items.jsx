let Items = ({food, handleBgButton, handleSellBtn, bought}) => {

    const handleButton = (food) => {
        console.log(`${food} item is baught`) 
    }

    return(<>
    <li className={`list-group-item ${bought && "active"}`} > 
        {food} 

        <button 
        type="submit" className="btn btn-success float-end"
        onClick={() => handleButton(food)
        }>
        Buy</button>

        <button 
        type="submit" className="btn btn-danger float-end me-2"
        onClick={handleSellBtn}>
        Sell</button>

        <button 
        type="submit" className="btn btn-warning float-end me-2"
        onClick={handleBgButton}>
        act</button>
    </li>
    </>
    );
}

export default Items;