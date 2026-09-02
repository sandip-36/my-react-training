const Addtodo = function (){
    return(
        <>
        <div className="row">
          <div className="col-6">
            <input className="form-control" type="text" />
          </div>
          <div className="col-4">
            <input className="form-control" type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">Success</button>
          </div>
        </div>
        </>
    )
}

export default Addtodo;