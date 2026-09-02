import { useState } from "react";
import Items from "./Items";

let FoodItems = ({item,color}) => {
  
  let [activeItems,  setActiveItems] = useState([]);
  let onBuybtn = (item, event) => {
    let newitems = [...activeItems, item];
    setActiveItems(newitems);
  }

    return<>
    <ul className="list-group">
    {item.map((item) => (
      <Items 
      key={item} 
      food={item} 
      bought={activeItems.includes(item)}
      handleSellBtn={()=>{console.log(`${item} is sold`), ''}}
      handleBgButton={(event)=> onBuybtn(item, event)}
      ></Items>
    ))}
  </ul>
    </>
}

export default FoodItems;