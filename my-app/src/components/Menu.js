import { Nav, Navbar, Container} from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">App</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar'></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar">
                    <Nav className='me-auto'>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Justificativos">Justificativos</Nav.Link>
                        <Nav.Link href="/Solicitudes">Solicitudes</Nav.Link>
                    </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar> 
    );
};

export default Menu;