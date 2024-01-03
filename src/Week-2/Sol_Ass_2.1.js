import {Button} from "react-bootstrap";
import{useState} from "react";

export default function CAss_2_1() {

    const [list,setList] = useState([]);

    function Adding() {
        var I1 = document.getElementById('items').value
        setList([...list,I1])
    }


    function Deleting(index)
    {
        let R1 =[...list]
        R1.splice(index,1)
        setList(R1)
    }

    var Added = list.map((item,index)=><li>{item}<Button onClick={()=>Deleting(index)}>&#128473;</Button></li>)

    return(
        <div style={{border:'2px solid black',borderRadius:'5px',width:'max-content',margin:'10px auto',padding:'10px'}}>
            <input style={{width:'10cm',height:'50px',margin:'10px',borderRadius:'5px'}} placeholder="Enter the items" id="items"></input>
            <Button onClick={Adding}>Add</Button>
            <li style={{listStyle:"none",marginTop:"5px"}}>{Added}</li>
        </div>
    )
}