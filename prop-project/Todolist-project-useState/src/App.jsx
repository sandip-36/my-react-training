import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { useState } from "react";
import Welcomemessege from "./components/welcomeMessege";


function App() {
  // const foods = [
  //   {
  //     name: "Buy Milk",
  //     duedate : "14/07/2026"
  //   },
  //   {
  //     name: "Go to College",
  //     duedate : "15/07/2026"
  //   },
  //   {
  //     name:"Repair bike",
  //     duedate:"25/07/2026"
  //   }
  // ]

  const [todoItem, setTodoItem] = useState([]);

  const handleNewitem = (todoItemName, todoItemDate) => {
      console.log(`here is the new item ${todoItemName} Date: ${todoItemDate}`);
      const todoNewitem = [...todoItem, {
      name:todoItemName,
      duedate:todoItemDate
    }];
    setTodoItem(todoNewitem);
  }

  const handleDeleteItem = (todoItemName) => {

    const newDeleteItem = todoItem.filter((item) => (item.name !== todoItemName))
    setTodoItem(newDeleteItem)
    console.log(`this item is deleted ${todoItemName}`);
  };
 
  return <>
    <center className='todo-container'>
      <AppName></AppName>
      <div className="container text-center">
        <AddTodo onNewItem={handleNewitem}></AddTodo>
        {todoItem.length == 0 && <Welcomemessege></Welcomemessege>}
        <TodoItems list={todoItem} onDeleteItem={handleDeleteItem}></TodoItems>
      </div>
    </center>

  </>
}

export default App