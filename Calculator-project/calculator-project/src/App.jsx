import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Display from './component/Display'
import Buttons from './component/Buttons'

function App() {
  const calNum = ["c",1,2,3,4,5,6,7,8,9,0]

  return <>
  <center>
    <div className='calc-otr' id="calculator">
    <Display></Display>
    <Buttons calbtn={calNum}></Buttons>
   </div>
  </center>
  </>
}

export default App
