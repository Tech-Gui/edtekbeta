import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgb(15, 12, 31)", // Replace with your custom background color
    color: "#f7f7f7", // Replace with your desired text color
    paddingLeft: "auto",
  };
  return (
    <footer style={footerStyle}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className=" ">
        <Container className=" text-md-start mt-5">
          <Row className="mt-3 d-flex justify-content-start align-content-center">
            <Col md={3} lg={4} xl={3} mxAuto mb={4} id="about">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                Edtek Solutions
              </h6>
              <p>
                Edtek Solutions (Pty) Ltd is a leading ICT firm dedicated to
                meeting the digital and electronic needs of businesses. From
                strategic consulting to software development and cybersecurity
                solutions, we offer comprehensive services throughout the
                business cycle. Partner with us for innovative solutions that
                drive your business forward.
              </p>
            </Col>
            {/* Grid column */}

            <Col
              md={2}
              lg={2}
              xl={2}
              mxAuto
              mb={4}
              style={{ textAlign: "left", marginLef: "3rem" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  E-bin
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Edtek Academy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </Col>

            <Col
              md={3}
              lg={2}
              xl={2}
              mxAuto
              mb={4}
              style={{ textAlign: "left" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Projects
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Technologies
                </a>
              </p>
            </Col>

            <Col
              md={4}
              lg={3}
              xl={3}
              mxAuto
              mbMd={0}
              mb={4}
              style={{ textAlign: "left" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" /> 1 jan smuts
                avenue, Braamfotein, 2000
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                info@edteksolutions.co.za
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> +27 635 897
                747
              </p>
            </Col>
            {/* Grid column */}
          </Row>
          {/* Grid row */}
        </Container>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(c, c, c, 0.8)" }}
      >
        © 2023 Edtek. All rights reserved.
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
