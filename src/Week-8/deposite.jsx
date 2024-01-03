import { useContext, useState } from "react";
import userContext from "./context";
export default function Deposite() {
    const P1 = useContext(userContext)
    const [curr_bal, setCurr_bal]=useState(P1.person[0].balance)
    const [deposite, setDeposite]=useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Deposite ${deposite}`)
        
    }
    P1.person[0].balance = curr_bal

    function Alert() {
        if (document.getElementById('in').value > 99) {
            setCurr_bal(Number(curr_bal) + Number(deposite))
        } else {
            alert(`No`)
        }
    }

    return(
        <div style={{width:'60%',margin:' 2% auto',border:'2px solid black',borderRadius:'10px',padding:'2%'}}>
            <h1>You can deposite your amount Here</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="" id="in" onChange={(e)=>setDeposite(e.target.value)}/>
                    <input type="submit" value="ClickToAdd" onClick={Alert} />
                
                <h2>Your balance is : {curr_bal}</h2>
                </form>
            </div>
        </div>
    )
}