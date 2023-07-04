import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => {}}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" onClick={() => {}}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => {}}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
