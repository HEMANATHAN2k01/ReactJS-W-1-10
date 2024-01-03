import { useState } from "react";
import Clock from "react-live-clock";

// import './Sol_CA-4.1.css'

export default function Activity4_1(){
    
    const [grocery,setGrocery]=useState([])
    const [value,setValue]=useState('')

    function handle(e){
    e.preventDefault();
    let newitem=value;
    let newlist=[...grocery,{text:newitem}]
    setGrocery(newlist)
    setValue('')
   
    }
    const removeItem = (index) =>{
        const newList =[...grocery];
        newList.splice(index,1);
        setGrocery(newList);
    }

    const style = 
    {
        border : '2px solid black',
        background : 'rgba(11, 209, 110, 0.5)',
        padding : '0.5%',
        width : '40%',
        margin : '5px auto',
        listStyle: 'none'
    }

    const inStyle ={
        width : '25%',
        margin : '2% auto'
    }
    let list =grocery.map((item,index)=>
    <li className="groce" style={style}> {item.text }&nbsp;<Clock format={'HH:mm:ss'} timezone={'US/pacific'}  />&nbsp;&nbsp;
        <button  onClick={()=>removeItem(index)}>DEL</button>
    </li>)

return(
    <div className="">
        <div className="heading">
            <h1>Task Tracker</h1>
            <h2>Input Task that have been completed below and keep track of the time when each item was added.</h2>
        </div>
        <div className="addList">
            {list}
        </div>
        <div style={inStyle} className="addingForm">
            <form onSubmit={handle}>
                <input className="input" placeholder="Add Event..." value={value} onChange={e=>setValue(e.target.value)} type='text' />&nbsp;&nbsp;
                <button onClick={handle}>press enter to submit</button>
            </form>
        </div>
    </div>
    )
}