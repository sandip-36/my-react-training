import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

let App = () => {

  // let foodItems = []
  let foodItems = ["Dal", "Green Vegetables", "Milk", "Roti", "Salad", "Biriyani"]

  // if (foodItems.length === 0){
  //   return <h5>I am still hungry</h5>
  // }

  // let epmty = foodItems.length === 0 ? <h3>i am still Hungry</h3> : null;

  return<>
  <h1>Food Items</h1>

  {/* {epmty}  */}
  {foodItems.length === 0 && <h3>I am stil hungry</h3>}

  <ul className="list-group">
    {foodItems.map(
      (item) => (<li key={item} className="list-group-item">{item}</li>)
      )}
</ul>
  </>
}

export default App;