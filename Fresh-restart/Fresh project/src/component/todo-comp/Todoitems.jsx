let Todoitems = ({todoname, tododate}) => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <p>{todoname}</p>
                </div>
                <div className="col-4">
                    {tododate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todoitems;