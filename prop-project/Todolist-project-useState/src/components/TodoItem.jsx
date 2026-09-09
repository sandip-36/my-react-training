const TodoItem = ({todoName, todoDate, onDeleteItem}) => {
    return (
        <div className="row mb-2">
          <div className="col-6"><h4>{todoName}</h4></div>
          <div className="col-4"><p>{todoDate}</p></div>
          <div className="col-2"><button type="button" className="btn btn-danger"
          onClick={() => onDeleteItem(todoName)}
          >Delete</button></div>
        </div>
    )
}

export default TodoItem