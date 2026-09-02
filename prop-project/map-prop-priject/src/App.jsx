import FoodItems from './components/FoodItems';
import Erromesage from './components/Errormesage';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodInput from './components/FoodInput';
import { useState } from 'react';

let App = () => {
  // let foodItems = [];
  // let foods = ["Burger", "Pizza", "Sandwitch", "Biriyani", "Noodles", "Momo"];

  // let empty = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;

  // let testTextArr = useState("Food item Entered by user"); //long way 
  // let textToShow = testTextArr[0];
  // let setTextState = testTextArr[1];

  let [textToShow, setTextState] = useState(); //short way
  let [foods, newFooditems] = useState([])
 
  


  const onKeyDown = (event) => {

    if(event.key === 'Enter'){
      let newItem = event.target.value;
      event.target.value = "";
      let addItems = [...foods, newItem];
      newFooditems(addItems);
      console.log(`food value entered is ${newItem}`);
      
    }
    }

  return (
    <>
      <Container>
        <h1>Food Items</h1>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <Erromesage item={foods}></Erromesage>
        <FoodItems item={foods}></FoodItems>
      </Container>

    </>



  )
}

export default App;