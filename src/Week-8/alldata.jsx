import { useContext } from "react"
import userContext from "./context"

export default function AllData() {
    let P2 = useContext(userContext)
    console.log(`Hi ${P2.person[0].name} your bal is ${P2.person[0].balance}`)
    return(
        <div style={{width:'60%',margin:' 2% auto',border:'2px solid black',borderRadius:'10px',boxShadow:'',padding:'2%'}}>
            <h1>All data</h1>
            {P2.person.map((item, key)=>(
                <li>{item.name} : {item.balance}</li>
            ))}
        </div>
    )
}