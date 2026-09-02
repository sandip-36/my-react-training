import buttoncss from "../calculator-comp/ButtonOuter.module.css"
const ButtonContainer = function () {

    let buttonNum = ['c', '+', '-', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return <>
        <div className={buttoncss.buttonContainer}>
            {buttonNum.map((num) => (
                <button key={num} className={buttoncss.buttonInner}>{num}</button>
            ))}
        </div>
    </>
}

export default ButtonContainer;