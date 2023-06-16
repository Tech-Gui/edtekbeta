import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Team() {
  return (
    <div
      style={{
        background: "rgb(15, 12, 31)",
        paddingTop: "1rem",
        paddingBottom: "17rem",
      }}
    >
      <Container className="d-flex justify-content-evenly mt-5">
        <Row>
          <h3 className="mt-2" style={{ fontWeight: "bold", color: "#fff" }}>
            {" "}
            Meet Our Team
          </h3>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/isaiah.jpeg"}
                alt="Linda"
                className="circular-image"
                width={"90%"}
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Linda Hasi
            </h6>
            <p className="job">Chief Exective Officer</p>
            <a
              href="https://www.linkedin.com/in/sizwe-mkhabela-90240520a/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/tore.png"}
                alt="Cyril"
                className="circular-image"
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Cyril Tamuka
            </h6>
            <p className="job">Managing Director</p>
            <a
              href="https://www.linkedin.com/in/sizwe-mkhabela-90240520a/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/messi.jpg"}
                alt="Paul"
                className="circular-image"
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Molato Paul Sekgoobela
            </h6>
            <p className="job">Chief Technology Officer</p>
            <a
              href="https://www.linkedin.com/in/sizwe-mkhabela-90240520a/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
