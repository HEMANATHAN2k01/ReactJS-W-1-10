import { Card,Button } from "react-bootstrap";
import Pic from '../images/myPic.jpg'
import './card.css'
export default function W7_Card_Pro1() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Pic} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}