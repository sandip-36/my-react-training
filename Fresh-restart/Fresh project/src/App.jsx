import Random from "./component/Random";
import Clockhead from "./component/Clockhead";
import Currentdate from "./component/Currentdate";
import 'bootstrap/dist/css/bootstrap.min.css'
import Errormessage from "./component/Errormessage";
import Fooditems from "./component/Fooditems";
import Appname from "./component/todo-comp/Appname";
import Addtodo from "./component/todo-comp/Addtodo";
import Allitems from "./component/todo-comp/Allitems"
import styles from "./component/Calculator.module.css"
import Display from "./component/calculator-comp/Display";
import ButtonContainer from "./component/calculator-comp/ButtonContainer";
import Container from "./component/container";
import Foodinput from "./component/Foodinput";
import { useState } from "react";


function App() {

  // let fooditem = []
  // let fooditem = ["dal", "vat", "sabji", "chicken", "Chatni", "papar"]
  
  let [fooditem, setFooditems] = useState([])
  // if(fooditem.length === 0){
  //   return <h4>The food cart is empty</h4>
  // }

  // let emptymessage = fooditem.length === 0 ? <h4>The food cart is empty</h4> : null;

  

  let inputOnKeydown = (event) => {
    if(event.key === 'Enter'){
      let newfood = (event.target.value);
      let newfoodSec = [...fooditem, newfood];
      setFooditems(newfoodSec);
    }
}

  //Todo items variable and functions//============
  let task = [
    {
      taskName: "Buy Milk",
      taskDate: "27/08/2026"
    },
    {
      taskName: "Go to College",
      taskDate: "26/08/2026"
    },
    {
      taskName: "Go to gym",
      taskDate: "27/08/2026"
    }
  ]




  return (
    <>
      <Container>
        <Random></Random>
        <Clockhead></Clockhead>
        <Currentdate></Currentdate>
      </Container>

      <Container>
        <h1>Healthy Foods</h1>
        {/* {emptymessage} */}
        <Errormessage array={fooditem}></Errormessage>
        <Foodinput handleOnKeydown={inputOnKeydown}></Foodinput>
        <Fooditems array={fooditem}></Fooditems>
      </Container>

      <Container>
        <div className="container text-center">
          <Appname></Appname>
          <Addtodo></Addtodo>
          <Allitems taskitem={task}></Allitems>
        </div>
      </Container>

      <Container>
        <center>
          <h1>Calculator</h1>
          <div className={styles.calculator}>
            <Display></Display>
            <ButtonContainer></ButtonContainer>
          </div>
        </center>
      </Container>
    </>
  )

}

export default App;