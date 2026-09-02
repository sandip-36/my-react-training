import Item from "./Item";
import { useState } from "react";

let Fooditems = function ({ array }) {

    let [activeItems, setActiveItems] = useState([]);

    let onbuybtn = (item, event) => {
        let newActive = [...activeItems, item];
        setActiveItems(newActive);
        
    }

    return (
        <>
            <ul className="list-group">
                {array.map((item) =>
                    <Item 
                    key={item}
                    fooditem={item}
                    bought={activeItems.includes(item)}
                    buttonTxt={(event)=>onbuybtn(item, event)}>

                    </Item>
                )}
            </ul>
        </>
    );
}

export default Fooditems;