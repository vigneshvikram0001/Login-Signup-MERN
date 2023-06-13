import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SQUARE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
