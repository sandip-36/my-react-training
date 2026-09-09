import { useState } from "react"

function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDatechange = (event) => {
    setTodoDate(event.target.value);
    
  }

  const handleAddButton = () => {
    onNewItem(todoName, todoDate)
    setTodoName("")
    setTodoDate("")
  }

  return <div className="row mb-2">
      <div className="col-6"><input type="text" placeholder="Enter Todo Here"
      value={todoName}
      onChange={handleNameChange}
      /></div>
      <div className="col-4"><input type="date"
      value={todoDate}
      onChange={handleDatechange}
      /></div>
      <div className="col-2"><button type="button" className="btn btn-success"
      onClick={handleAddButton}
      >Add</button></div>
    </div>
}

export default AddTodo