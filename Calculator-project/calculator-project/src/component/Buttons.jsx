
import styles from './button.module.css'
import CalBtn from './CalBtn';


const Buttons = ({onButtonClick}) => {
  const calNum = ['c','1','2','3','+','4','5','6','-','7','8','9','=','0', '.']
    
    return(
        <>
        
        <div className={styles["btn-otr"]}>
        {calNum.map((item) => (<CalBtn key={item} calbt={item} onButtonClick={() => onButtonClick(item)}></CalBtn>))}
        </div>
        </>
    )
}

export default Buttons;