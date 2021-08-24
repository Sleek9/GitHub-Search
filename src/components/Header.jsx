import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
        <Container>
          <Navbar.Brand>
            <NavLink
              exact
              to="/"
              className="flex text-resete"
              activeClassName=""
            >
              <img src={Logo} alt="Logo" />
              <span>GitHub</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto second-nav">
              <Navbar.Brand>
                <NavLink
                  exact
                  to="/repositories"
                  className="text-resete"
                  activeClassName="active"
                >
                  Repositorios
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink
                  exact
                  to="/org"
                  className="text-resete"
                  activeClassName="active"
                >
                  Organizaciones
                </NavLink>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
