import { useState } from "react"

export default function Rough() {

    const [add, setAdd] = useState(0)
    const [bal, setBal] = useState(0)

    function handle(e) {
        e.preventDefault()
        setAdd(Number(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setBal(bal + add)
    }

    // const list = add.map((item,index)=><p>{item}</p>)
    return(
        <div style={{border:'2px solid black',
        width:'40%',
        margin:'2% auto'
        }}>
            <form onSubmit={handleSubmit} style={{width:'50%',margin:'2% auto'}}>
                <h1>Balance is {bal} </h1>
                <input type="number" name="" id="" onChange={handle} />
                <button type="submit">Add</button>
            </form>
            {/* <div className="">
                {list}
            </div> */}
        </div>
    )
}