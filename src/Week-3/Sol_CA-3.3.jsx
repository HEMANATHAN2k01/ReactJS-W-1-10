import { Button } from "react-bootstrap";
import { useState } from "react";
export default function ManagedForm() {
    // for managed form
    const [myName, setMyName] = useState('')

    //for unmanaged form
    function handle() {
        let name = document.getElementById('fillName').value
        document.getElementById('fill').innerHTML = name
    }

    //css
    const mainStyle = {
        border:'2px solid black',
        width:'60%',
        padding:'2%',
        margin:'5% auto'
    }

    const miniStyle = 
    {
        padding:'2%',
        width:'50%',
        margin:'auto'
    }
    
    return(
        <div style={mainStyle}>
            <center><h1><u>Managed form and Unmanaged form</u></h1></center>
            <center>
            <div style={miniStyle}>
            <div className="managed">
                <h2> <u>-managedForm-</u> </h2>
                <form>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="" id="" value={myName} onChange={(e)=>setMyName(e.target.value)} />{''}
                    <Button>Submit</Button>
                </form>
                <p>My Name is {myName}.</p>
            </div>

            <div className="unmanaged">
                <h2> <u>-unmanagedForm-</u> </h2>
                <form>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="" id="fillName" />
                    <Button onClick={handle}>Submit</Button>
                </form>
                <p>My Name is <span id="fill"></span> </p>
            </div>
            </div>
            </center>
        </div>
    )
}