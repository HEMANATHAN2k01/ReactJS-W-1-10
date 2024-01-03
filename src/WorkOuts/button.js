import { Button } from "react-bootstrap"

export default function MyButton(props) {

    return(
        // <Button onClick={props.action}>Click {props.k}</Button>
        // <Button variant="success" index={props.index} onClick={props.action}>Click</Button>
        <Button variant='success' onClick={props.onclick}>Click Me</Button>
    )
}