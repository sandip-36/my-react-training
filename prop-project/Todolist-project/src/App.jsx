import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";


function App() {
  const foods = [
    {
      name: "Buy Milk",
      duedate : "14/07/2026"
    },
    {
      name: "Go to College",
      duedate : "15/07/2026"
    },
    {
      name:"Repair bike",
      duedate:"25/07/2026"
    }
  ]
  return <>
    <center className='todo-container'>
      <AppName></AppName>
      <div className="container text-center">
        <AddTodo></AddTodo>
        <TodoItems list={foods}></TodoItems>
      </div>
    </center>

  </>
}

export default App