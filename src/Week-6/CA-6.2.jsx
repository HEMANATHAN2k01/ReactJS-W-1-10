import './styles.css'
import { useState } from 'react'

function Square({ id, player,changePlayer })
    {
        const [color, setColor] = useState('Green')
        let palet = ['Red', 'Pink','Yellow']
        let nextplayer=(player+1) % 2
        
        function getrandomcolor()
        {
            return palet[Math.floor(Math.random()*2)]
        }
        return (<button onClick={(e) => { setColor(getrandomcolor());
            e.target.style.background = color
            changePlayer(nextplayer)}} ></button>)
        }

export default function CA_6_2() {
    const [player, setPlayer] = useState(1)
    let status = `Player ${player}`
    function rendersquare(id) 
    {
        return <Square id={id} player={player} changePlayer={changePlayer}></Square>
    }
    
    function changePlayer(p)
    {
        setPlayer(p)
    }
    
        return (
    <div>
        <h1>TIC TAC TOC GAME</h1>
        <div className='game-board'>
            <div className='grid-row'>
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}
            </div>
            <div>
                <h1>{status}</h1>
                <button>Change Player</button>
            </div>
        </div>
    </div>)}