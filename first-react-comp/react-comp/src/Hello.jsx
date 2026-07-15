function Hello(){

    let myName = "Sandip";
    let Num = 7;
    let fullName = () => {
        return 'Sandip Halder'
    }
    return <h3>
        Hello this is your number {Num} i am your master {fullName()}
    </h3>
}

export default Hello