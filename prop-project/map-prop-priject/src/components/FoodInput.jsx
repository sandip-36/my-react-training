import styles from "./Food.module.css";

const FoodInput = ({handleOnKeyDown}) => {

    

    return<>
        <input type="text" className={styles.food}
        onKeyDown={handleOnKeyDown}
        />
    </>
}

export default FoodInput;