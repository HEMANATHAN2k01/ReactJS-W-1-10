import { useContext, useState } from "react";
import userContext from "./context";
export default function Deposite() {
    const P1 = useContext(userContext)
    const [curr_bal, setCurr_bal]=useState(P1.person[0].balance)
    const [withdraw, setWithdraw]=useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Withdraw ${withdraw}`)
        
    }
    P1.person[0].balance = curr_bal

    function Alert() {
        if (document.getElementById('out').value > 99) {
            setCurr_bal(Number(curr_bal) - Number(withdraw))
        } else {
            alert(`No`)
        }
    }

    return(
        <div style={{width:'60%',margin:' 2% auto',border:'2px solid black',borderRadius:'10px',padding:'2%'}}>
            <h1>You can withdraw your amount here</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="" id="out" onChange={(e)=>setWithdraw(e.target.value)}/>
                    <input type="submit" value="ClickToTake" onClick={Alert} />
                
                <h2>Your balance is : {curr_bal}</h2>
                </form>
            </div>
        </div>
    )
}