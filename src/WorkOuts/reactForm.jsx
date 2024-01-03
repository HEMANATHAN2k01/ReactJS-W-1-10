import {Button} from 'react-bootstrap'

import { useState } from 'react'

export default function SignUp() {

    const [year,setYear] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [check,setCheck] = useState('')
    function handle() {
        // console.log(document.getElementById('year').value)
        // console.log(document.getElementById('name').value)
        // console.log(document.getElementById('email').value)
        // console.log(document.getElementById('pass').value)
        // console.log(document.getElementById('check').checked)
        console.log('Year :',year)
        console.log('Name :',name)
        console.log('Email :',email)
        console.log('Password :',pass)
        console.log('Checked :',check)
    }
    return(
        <div>
            <div>
                <select value={year} onChange={e=>setYear(e.target.value)}>
                    <option>Freahman</option>
                    <option>Sophmore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                </select><br />
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} /><br />
                <label htmlFor="">Email-id</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/><br />
                <label htmlFor="">Password</label>
                <input type="password" value={pass} onChange={e=>setPass(e.target.value)}/><br />
                <input type="checkbox" value={check} onChange={e=>setCheck(e.target.checked)}/>Rememeber me<br />
                <Button onClick={handle}>Submit</Button>
            </div>
        </div>
    )
}