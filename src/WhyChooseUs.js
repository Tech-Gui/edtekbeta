import React from "react";
import { Container, Row, Col, div } from "react-bootstrap";

function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <Container className=" d-flex justify-content-center flex-column align-items-center">
        <h3 style={{ fontWeight: "bold", color: "#0F0C1F" }} className="mb-5">
          Why Choose Us
        </h3>
        <Row>
          <Col>
            <div
              className="core-value"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  padding: "6px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                  color: "#6936F4",
                }}
                className="btn btn-light btn-social "
              >
                <i class="fa-regular fa-lightbulb fa-xl"></i>
              </div>
              <h3 className="mt-2 ">Innovation</h3>
              <p className="mb-4 ">
                We continuously strive for innovative solutions that drive
                progress and deliver exceptional results.
              </p>
              <div
                style={{
                  backgroundColor: "#6936F4",
                  borderRadius: "25px",
                  borderColor: "#6936F4",
                  color: "#fff",
                  width: "50%",
                  padding: "3px",
                  fontSize: "small",
                }}
                className="text-center"
              >
                Hire Us
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="core-value"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  padding: "6px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                  color: "#6936F4",
                }}
                className="btn btn-light btn-social "
              >
                <i class="fa-regular fa-heart"></i>
              </div>

              <h3 className="mt-2">Customer Centric</h3>
              <p className="mb-4 ">
                Our customers are at the center of everything we do. We
                prioritize their needs and satisfication.
              </p>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "25px",
                  border: "1px solid #6936F4", // Specify the border style
                  color: "#6936F4",
                  width: "50%",
                  padding: "2px",
                  fontSize: "small",
                }}
                className="text-center "
              >
                Hire Us
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="core-value"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <div
                style={{
                  borderRadius: "100%",
                  padding: "6px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                  color: "#6936F4",
                }}
                className="btn btn-light btn-social "
              >
                <i class="fa-regular fa-handshake"></i>
              </div>

              <h3 className="mt-2">Integrity</h3>
              <p className="mb-4">
                We uphold the highest standards of integrity, honesty, and
                ethical behavior in all aspects.{" "}
              </p>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "25px",
                  border: "1px solid #6936F4", // Specify the border style
                  color: "#6936F4",
                  width: "50%",
                  padding: "2px",
                  fontSize: "small",
                }}
                className="text-center "
              >
                Hire Us
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseUs;
