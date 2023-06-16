import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ClientsPartners() {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card
          className="lift-card counting-card"
          id="clients"
          style={{ marginTop: "-10rem", borderRadius: "2rem" }}
        >
          <Card.Body>
            <h3
              style={{ fontWeight: "bold", color: "#0F0C1F" }}
              className="mb-5"
            >
              Clients and Partners
            </h3>
            <Row className=" d-flex justify-content-between align-items-cente">
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/gp.png"}
                  alt="Client 1"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/unknown.png"}
                  alt="Client 2"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/phanda.png"}
                  alt="Client 3"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/yaei.jpeg"}
                  alt="Client 3"
                  className="logo img-fluid"
                />
              </Col>
            </Row>
            <Row className=" d-flex justify-content-center">
              <Col
                xs={12}
                md={10}
                className="mt-3 d-flex justify-content-center align-items-cente"
              >
                <img
                  src={process.env.PUBLIC_URL + "/dq.jpeg"}
                  alt="Partner 1"
                  className="img-fluid dequest"
                />
              </Col>
            </Row>
            <Row className=" d-flex justify-content-between align-items-center">
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/tibs.png"}
                  alt="Client 1"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/digital.jpg"}
                  alt="Client 2"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/brought.png"}
                  alt="Client 3"
                  className="logo img-fluid"
                />
              </Col>
              <Col xs={5} md={3}>
                <img
                  src={process.env.PUBLIC_URL + "/flensi.jpeg"}
                  alt="Client 3"
                  className="logo img-fluid"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ClientsPartners;
