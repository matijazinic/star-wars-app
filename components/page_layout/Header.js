import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import logo from "../../public/logo.svg";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <img
                src={logo.src}
                width={100}
                className="d-inline-block"
                alt="Star Wars logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link href="/people" passHref>
                <Nav.Link className="ff-sw">People</Nav.Link>
              </Link>
              <Link href="/vehicles" passHref>
                <Nav.Link className="ff-sw">Vehicles</Nav.Link>
              </Link>
              <Link href="/ships" passHref>
                <Nav.Link className="ff-sw">Ships</Nav.Link>
              </Link>
              <Link href="/films" passHref>
                <Nav.Link className="ff-sw">Films</Nav.Link>
              </Link>
              <Link href="/planets" passHref>
                <Nav.Link className="ff-sw">Planets</Nav.Link>
              </Link>
              <Link href="/species" passHref>
                <Nav.Link className="ff-sw">Species</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
