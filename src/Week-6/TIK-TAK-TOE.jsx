import { useState } from "react";
import './T-Game.css'

function Square({id, player}) {
    
    const [color, setColor]=useState('red')
    let palet = ['green','yellow','orange']
    const getrandomcolor = () =>{
        return palet[Math.floor(Math.random()*3)]
    }
    return <button onClick={(e)=>{setColor(getrandomcolor());e.target.style.background=color}}></button>
}

export default function TGame() {
    function renderSquare(id) {
        return <Square id={id} player={player}></Square>
    }
    const [player, setPlayer]=useState(0)
    let status = `Player ${player}`

    return(
        <div className="game-board" onClick={(e)=>{setPlayer((player+1)%2);
            status = `Player ${player}`;
        // e.target.style.background='#dbdb5f';
        }}>
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="grid-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="grid-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <h1>{status}</h1>
        </div>
    )
}