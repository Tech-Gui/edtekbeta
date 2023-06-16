import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function Header() {
  return (
    <div
      style={{
        background: "rgb(15, 12, 31)",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Navbar variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="logo"
                style={{ height: "50px" }}
              />
            </Navbar.Brand>
            <Nav
              className="me-auto"
              style={{ marginLeft: "15rem", color: "#fff" }}
            >
              <Nav.Link href="#home" style={{ color: "#fff" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#features" style={{ color: "#fff" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#fff" }}>
                Services
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "#fff" }}>
                Portfolio
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#pricing"
                style={{
                  marginLeft: "10rem",
                  color: "#fff",
                  marginRight: "1rem",
                }}
              >
                Hire Us
              </Nav.Link>
              <Button
                style={{
                  backgroundColor: "#6936F4",
                  borderRadius: "25px",
                  borderColor: "#6936F4",
                }}
                className="gradient-button"
              >
                Contact Us
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
