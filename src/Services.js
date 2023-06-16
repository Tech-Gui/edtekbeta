import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Services() {
  return (
    <div className="services">
      <div
        style={{
          background: "rgb(15, 12, 31)",
          paddingTop: "3rem",
          paddingBottom: "6rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        className="mt-5"
      >
        <h3 className="mt-3 gradient-text" style={{ fontWeight: "bold" }}>
          {" "}
          Languages and Technologies
        </h3>

        <Row className="d-flex flex-row mt-5">
          <Col style={{ fontSize: "3rem" }}>
            <i className="devicon-react-original-wordmark colored "></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-swift-plain colored"></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-nodejs-plain colored"></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-java-plain-wordmark colored"></i>
          </Col>
          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-python-plain-wordmark colored"></i>
          </Col>
          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-mongodb-plain colored"></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-docker-plain-wordmark colored"></i>
          </Col>
          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-flutter-plain colored"></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-csharp-plain-wordmark colored"></i>
          </Col>

          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-android-plain-wordmark colored"></i>
          </Col>
          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-angularjs-plain colored"></i>
          </Col>
          <Col style={{ fontSize: "3rem" }}>
            <i class="devicon-azure-plain colored"></i>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Services;
