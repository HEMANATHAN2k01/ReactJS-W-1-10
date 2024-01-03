import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pic from '../images/myPic.jpg'

import './card.css'

export default function BasicExample() {
  return (

    <div>
      <h1>InstaProfile</h1>
      <div className='display'>
      <div className='dis'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title><h1>Instagram</h1></Card.Title>
        <Card.Title><h4>User id : aj_hems</h4></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='dis'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title><h1>Instagram</h1></Card.Title>
        <Card.Title><h4>User id : aj_hems</h4></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='dis'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title><h1>Instagram</h1></Card.Title>
        <Card.Title><h4>User id : aj_hems</h4></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>
  );
}