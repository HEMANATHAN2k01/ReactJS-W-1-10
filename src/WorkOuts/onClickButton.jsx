import { Button } from "react-bootstrap"

export default function App(props) {
    let numbers = props.menuitems;
    const style ={
        color : 'red',
        fontSize : 20,
        fontType : 'Arial',
        backgroundColor : 'ligthblue'
    };

    function handle(e) {
        alert(`You have clicked button ${e.target.innerHTML}`)
    }

    return(
        <div>
            {numbers.map((item,i)=> (<Button key={i} id={i} onClick={handle} style={style}>{item}</Button>))}
        </div>
    )
}