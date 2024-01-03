import {useState} from 'react'
export default function CA_5_1(){
  const[status,setStatus]=useState()
  const[value,setValue]=useState()
  const[amount,setAmount]=useState(0)

  const deposit=()=>{
    if(value>0) setAmount(Number(value)+amount)
    else {
      alert("Enter a valid amount")
    }
  }
  const cashback=()=>{
   if(value<amount)setAmount(amount-Number(value))
   else{
     alert ("Your Account balance is insufficient")
   }
  }
  return(
   <><form>
    <p>Refresh here to see your changes</p>
       <h1>Account balance is $ {amount}</h1>
       <p>Select an action below to continue</p>
    <select onChange={(event)=>{
      setStatus(event.target.value)
    }}>
      <option></option>
      <option value="deposit">Deposit</option>
      <option value="cashback">Cash Back</option>
      </select><br/><br/>
      {status==='deposit' ?(
        <label><h1>{status}</h1>{}
        <input type="number" onChange={(e)=>setValue(e.target.value)}/>
        <input type="button" value="submit" disabled={!value} onClick={deposit}/>
        </label>
      ):null}
      {status==='cashback' ?(
        <label><h1>{status}</h1>{}
        <input type="number" onChange={(e)=>setValue(e.target.value)}/>
        <input type="button" value="submit" disabled={!value} onClick={cashback}/>
        </label>
      ):null}
      </form> 
    </>
  )
}