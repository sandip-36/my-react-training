import Todoitems from "./Todoitems"
const Allitems = ({taskitem}) => {
      let todoname = "milk";
        let tododate = '27/8/26'
    return(
        <>
        {taskitem.map((item)=>(
            <Todoitems key={item.taskName} todoname={item.taskName} tododate={item.taskDate}></Todoitems>
            ))}
        
        </>
    )
}
export default Allitems;