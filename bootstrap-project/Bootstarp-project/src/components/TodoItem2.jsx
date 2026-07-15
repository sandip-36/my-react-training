function TodoItem2(){
    let todoName = "Go to college";
    let todoDate = "10/07/26"
    return <div className="row mb-2">
          <div className="col-6"><h4>{todoName}</h4></div>
          <div className="col-4"><p>{todoDate}</p></div>
          <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
        </div>
      
}

export default TodoItem2;