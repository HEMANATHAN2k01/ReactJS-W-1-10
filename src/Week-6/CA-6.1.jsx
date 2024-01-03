import { useState } from 'react'
import './styles.css'

function Square({id, player}){
    const[mount,setMount]=useState(true)
    
    function toggle()
    {
        setMount(!mount)
    }
    return(
        <>
            {mount && <button onClick={toggle}>+</button>}
        </>
    )
}

export default function CA_6_1()
{
    const[player,setPlayer]=useState(0)
    function rendersquare(id)
    {
        return <Square id={id} player={player}></Square>
    }
    return(
        <div className="">
            <div className="game-board" onClick={e=>{setPlayer((player+1)%2)}}>
                <div className="grid-row">
                    <div className="">{rendersquare(0)}</div>
                    <div className="">{rendersquare(1)}</div>
                    <div className="">{rendersquare(2)}</div>
                </div>
            </div>

        </div>
    )
}