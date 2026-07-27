import FoodItems from './components/FoodItems';
import Erromesage from './components/Errormesage';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

let App = () => {
  // let foodItems = [];
  let foods = ["Burger", "Pizza", "Sandwitch", "Biriyani", "Noodles", "Momo"];

  // let empty = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null;

  return (
    <>
      <Container>
        <h1>Food Items</h1>
        <Erromesage item={foods}></Erromesage>
        <FoodItems item={foods}></FoodItems>
      </Container>

    </>



  )
}

export default App;