import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "./Services";
import Team from "./Team";
import ClientsPartners from "./ClientPartners";
import ContactUs from "./Contact";
import WhyChooseUs from "./WhyChooseUs";
import CurrentProjects from "./Projects";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FlippingCards from "./FlippinCard";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ backgroundColor: "#f7f7f7", overflow: "hidden" }}
      >
        {/* <Header /> */}
        <Navbar />
        <header className="App-header mt-5">
          <Container className="mt-3">
            <Row id="home">
              <Col md={6} style={{ marginTop: "5rem" }} className="landing1">
                <div>
                  <h1 className="gradient-text">You Dream it. We Build it.</h1>
                </div>
                <p>
                  Transforming Dreams into Reality through Cutting-Edge Software
                  Development.
                </p>
                <Button
                  style={{
                    backgroundColor: "#6936F4",
                    borderRadius: "25px",
                    borderColor: "#6936F4",
                  }}
                  className="gradient-button"
                >
                  Get Started
                </Button>
              </Col>
              <Col
                md={6}
                style={{
                  marginTop: "5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="landing2"
              >
                <Row>
                  <Col>
                    <div
                      className="circular-frame"
                      style={{ marginTop: "7rem" }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/chris.png"}
                        alt="image"
                        className="circular-image"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="circular-frame">
                      <img
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt="image"
                        className="circular-image"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="circular-frame"
                      style={{ marginTop: "7rem" }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/land.png"}
                        alt="image"
                        className="circular-image"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>

        <Container className="d-flex justify-content-center">
          <Card
            className="lift-card counting-card"
            id="stats"
            style={{ marginTop: "-4rem", borderRadius: "2rem" }}
          >
            <Card.Body>
              <h3
                style={{ fontWeight: "bold", color: "#0F0C1F" }}
                className="mb-5"
              >
                Statistics
              </h3>
              <div className="counting-numbers">
                <div
                  className="counting-item gradient-text1"
                  style={{ fontSize: "2.5em" }}
                >
                  <i class="fa-solid fa-briefcase"></i>
                  <h2>
                    <CountUp end={20} duration={3} />+
                  </h2>
                  <p>Projects Completed</p>
                </div>
                <div
                  className="counting-item gradient-text1"
                  style={{ fontSize: "2.5em" }}
                >
                  <i className="fa-regular fa-handshake "></i>
                  <h2>
                    <CountUp end={10} duration={3} />+
                  </h2>
                  <p>Happy Clients</p>
                </div>
                <div
                  className="counting-item gradient-text1"
                  style={{ fontSize: "2.5em" }}
                >
                  <i className="fa-regular fa-people-group fa"></i>
                  <h2>
                    <CountUp end={5} duration={3} />+
                  </h2>
                  <p>Team Members</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <FlippingCards />
        <Team />
        <ClientsPartners />
        <WhyChooseUs />
        <CurrentProjects />
        <Services />
        <ContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
