import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Signin from './signin';

export default function CAss_7_1() {
    return (
    <>
    <HashRouter>
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#/signin">Signin</Nav.Link>
                <Nav.Link href="#mission">Mission</Nav.Link>
                <Nav.Link href="#p">About</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <Routes>
        <Route path='/signin' element={<Signin />}></Route>
    </Routes>
    </HashRouter>
    </>
)}