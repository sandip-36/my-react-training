import food from "./Foodinput.module.css"


const Foodinput = ({handleOnKeydown}) => {
    return <>
        <input type="text" placeholder="Enter Your Food" className={food.foodenter} 
        onKeyDown={handleOnKeydown}
        />
    </>
}

export default Foodinput;