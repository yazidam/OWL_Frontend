import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Hiarchie Entreprise</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="collapse navbar-collapse justify-content-end">
              <LinkContainer to="/listemployee">
                <Nav.Link>
                  <i className="fas fa-user"></i> List employees
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/travaillesouslememedepartement">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  Departement
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/travaillesous">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Directeur
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/travailledanslamemeequipe">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  Equipe
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
