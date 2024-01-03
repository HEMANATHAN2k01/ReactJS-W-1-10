import { useState } from "react"
import ATMDeposite from "./secATMDep"


export default function State() {

    const [totalstate, setTotalState] = useState(0)

    let transactionState  = 0

    function handleChange(e) {
        e.preventDefault()
        transactionState = Number(e.target.value)
    }

    function handleSubmit(e) {
        setTotalState(totalstate+transactionState)
        e.preventDefault()
    }
    return(
        
            <form onSubmit={handleSubmit} action="">
                <h1>Account Balance is ${totalstate}</h1>
                <ATMDeposite onChange={handleChange} />
            </form>
    )
}