import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      name,
      email,
      message: `${message}\n\n${email}`,
    };
    emailjs

      .send(
        "service_j21k8ta",
        "template_ek79hdx",
        templateParams,
        "ak5pf60tfN57BR_Za"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email: " + error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact-us mt-5 mb-5 d-flex justify-content-center align-items-center">
      <Card
        className="lift-card "
        id="contact1"
        style={{
          borderRadius: "2rem",
        }}
      >
        <Card.Body>
          <Container>
            <h2 className="mt-3 mb-3">Contact Us</h2>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <div className="contact-form">
                  <Row>
                    <Col
                      className="d-flex justify-content-start align-items-center flex-column"
                      style={{ marginRight: "auto" }}
                    >
                      <h6 style={{ color: "#6936F4", marginRight: "auto" }}>
                        Drop a message
                      </h6>
                      <p style={{ marginRight: "auto" }}>
                        For a swift response
                      </p>
                    </Col>
                    <Col>
                      <Row>
                        <Col md={2}>
                          <div
                            className="circular-frame "
                            style={{
                              width: "2rem",
                              height: "2rem",
                              borderRight: "1px",
                            }}
                            id="whatsapp"
                          >
                            <img
                              src={process.env.PUBLIC_URL + "/whatsapp.png"}
                              alt="image"
                              className="circular-image"
                            />
                          </div>
                        </Col>
                        <Col>
                          <span>
                            <h6
                              style={{ color: "#6936F4", marginRight: "auto" }}
                            >
                              Live Chat?
                            </h6>
                          </span>
                          <p>Text us now</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <div id="contact-form">
                    <form onSubmit={handleSubmit}>
                      <Row className="wow fadeInUp mb-3" data-wow-delay="1s">
                        <Col>
                          <input
                            name="fullname"
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder="Your Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            style={{ borderColor: "#000" }}
                          />
                        </Col>
                        <Col>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            style={{ borderColor: "#000" }}
                          />
                        </Col>
                      </Row>
                      <div className="wow fadeInUp mb-3" data-wow-delay="1.4s">
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control"
                          id="message"
                          placeholder="Write your message..."
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          style={{ borderColor: "#000" }}
                        ></textarea>
                      </div>
                      <div
                        className=" wow fadeInUp col-md-6 col-sm-8 "
                        data-wow-delay="1.6s"
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <Button
                          type="submit"
                          className="form-control"
                          id="submit"
                          style={{
                            background: "#6936F4",
                            borderColor: "#6936F4",
                          }}
                        >
                          Send
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactUs;
