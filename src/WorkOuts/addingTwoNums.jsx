export default function Adding() {
    var myNum1 = 20
    var myNum2 = 20
    var sum = myNum1+myNum2
    const s = () => {
        
        return `<h1>${sum}</h1>`
    }
    return(
        <div className="">
            <p>{sum}</p>
            <input type="button" value="Click" onClick={s}/>
        </div>
    )
}