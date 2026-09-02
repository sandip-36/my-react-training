import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Display from './component/Display'
import Buttons from './component/Buttons'
import { useState } from 'react'

function App() {
  let [calval, setCalval] = useState("");
  const buttonValue = (buttonText) => {
    if(buttonText === "c"){
      setCalval("");
    }else if(buttonText === "="){
      let result = eval(calval)
      setCalval(result);
    }else{
      let newdisplayvalue = calval + buttonText;
      setCalval(newdisplayvalue);
    }
  }
  

  return <>
  <center>
    <div className='calc-otr' id="calculator">
    <Display displayValue={calval}></Display>
    <Buttons onButtonClick={buttonValue
    }></Buttons>
   </div>
  </center>
  </>
}

export default App
