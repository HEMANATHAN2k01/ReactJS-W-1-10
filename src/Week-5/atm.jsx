import { useState } from "react";
import FatmDeposite from "./formATMDeposite";

export default function DisATM() {
    let [deposite, setDeposite] = useState(0)
    const [totalState, setTotalState] = useState(0)
    const [isDeposite, setIsDeposite] = useState(true)

    let status = `Account Balance ${totalState}`
    console.log(`Account Rendered with isDeposite ${isDeposite}`)

    const handleChange = event =>
    {
        console.log(`handleChange ${event.target.value}`)
        deposite = Number(event.target.value)
    }

    const handleSubmit = (event) =>
    {
        let newTotal = isDeposite ? totalState + deposite : totalState - deposite
        setTotalState(newTotal)
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <button onClick={()=>setIsDeposite(true)}>Deposit</button>
            <button onClick={()=>setIsDeposite(false)}>CashBack</button>
            <FatmDeposite onChange={handleChange} isDeposite={isDeposite}></FatmDeposite>
        </form>
    )
}