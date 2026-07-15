import TodoItem from "./TodoItem";

const TodoItems = ({list}) => {
  return(
    <div className="container text-center">
      {list.map((item) => (<TodoItem todoDate={item.duedate} todoName={item.name}></TodoItem>))}
      </div>
  )
}

export default TodoItems;