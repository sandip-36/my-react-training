import Items from "./Items";

let FoodItems = ({item,color}) => {
  
    return<>
    <ul className="list-group">
    {item.map((item) => (
      <Items key={item} food={item}></Items>
    ))}
  </ul>
    </>
}

export default FoodItems;