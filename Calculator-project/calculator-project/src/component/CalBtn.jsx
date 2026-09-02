const CalBtn = ({calbt, onButtonClick}) => {
    return(
        <>
            <button
            onClick={onButtonClick}
            >{calbt}</button>
        </>
    )
}

export default CalBtn;