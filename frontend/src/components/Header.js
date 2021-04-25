import React from 'react'
import{Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant = 'dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">SummerFriday</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/summer">Summer</Nav.Link>
                            <Nav.Link href="/friday">Friday</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar> 

        </header>
    )
}

export default Header
