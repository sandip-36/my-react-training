import css from "../calculator-comp/Display.module.css"
const Display = function(){
    return <>
        <input className={css.display} type="text" />
    </>
}

export default Display;