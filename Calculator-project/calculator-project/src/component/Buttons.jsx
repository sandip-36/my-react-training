
import styles from './button.module.css'
import CalBtn from './CalBtn';


const Buttons = ({calbtn}) => {
  
    
    return(
        <>
        
        <div className={styles["btn-otr"]}>
        {calbtn.map((item) => (<CalBtn key={item} calbt={item}></CalBtn>))}
        </div>
        </>
    )
}

export default Buttons;