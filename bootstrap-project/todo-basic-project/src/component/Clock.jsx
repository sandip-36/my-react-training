let Clock = () => {
    let date = new Date();
    return<>
    <p>This is the Current time: {date.toDateString()} - {date.toLocaleTimeString()}</p>
    </>
};
    


export default Clock;