import TodoItem from "./TodoItem";

const TodoItems = ({list, onDeleteItem}) => {
  return(
    <div className="container text-center">
      {list.map((item) => (<TodoItem todoDate={item.duedate} todoName={item.name} onDeleteItem={onDeleteItem}></TodoItem>))}
      </div>
  )
}

export default TodoItems;