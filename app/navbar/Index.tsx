"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export function NavBarComponent() {
  return (
    <header>
      <Navbar
        key="false"
        expand="false"
        className="bg-primary text-light"
        variant="dark"
      >
        <Container fluid>
          <Link href="/">
            <Navbar.Brand>Falck-App</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />{" "}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
            className="bg-primary text-light navbar-dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Meny
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Hjem</Nav.Link>
                <Nav.Link href="#action1">Nytt innlegg</Nav.Link>
                <Nav.Link href="#action1">Ny hendelse</Nav.Link>
                <Nav.Link href="#action2">Alle nyheter</Nav.Link>
                <NavDropdown
                  title="Dine ting"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  {" "}
                  <NavDropdown.Item as={Link} href="/Users">
                    Innlegg
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action4">Hendelser</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Endre profil
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Søk her..."
                  className="me-2"
                  aria-label="search"
                />
                <Button variant="outline-success">Søk</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
