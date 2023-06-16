import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

const FlippingCards = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const handleClick = (index) => {
    setIsFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="services" id="services">
      <Container>
        <h3 style={{ fontWeight: "bold", color: "#0F0C1F" }} className="mb-5">
          Our Services
        </h3>
        <Row className="mt-3 mb-5">
          <Col sm={4}>
            <ReactCardFlip isFlipped={isFlipped[0]} flipDirection="horizontal">
              <Card onClick={() => handleClick(0)} className="flipping-card">
                <Card.Body>
                  <div
                    style={{
                      borderRadius: "100%",
                      padding: "6px",
                      paddingLeft: "9px",
                      paddingRight: "0px",
                      color: "#6936F4",
                      marginRight: "15rem",
                    }}
                    className="btn btn-light btn-social"
                  >
                    <i className="fa-regular fa-lightbulb fa-xl"></i>
                  </div>
                  <h3 className="mt-2" style={{ textAlign: "justify" }}>
                    {" "}
                    Consulting
                  </h3>
                  <p className="mb-4" style={{ textAlign: "left" }}>
                    Edtek Solutions is an ICT firm at the forefront of advanced
                    technology. We specialize in helping businesses navigate the
                    digital landscape by providing expert consulting services in
                    areas such as digital transformation, data analytics,
                    insights, and cloud services. Our team of experienced
                    professionals is dedicated to helping organizations optimize
                    their technology investments and drive growth through
                    data-driven insights.
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
                      marginTop: "auto",
                    }}
                    className="text-center"
                  >
                    Learn More
                  </div>
                </Card.Body>
              </Card>
              <Card onClick={() => handleClick(0)} className="flipping-card">
                <Card.Body>
                  <Card.Title>Consulting</Card.Title>
                  <Card.Text>
                    <strong>Digital Transformation:</strong> Leverage technology
                    to fundamentally change how businesses operate and deliver
                    value. Our experts identify opportunities for digital
                    transformation, design new processes, and drive innovation
                    and growth.
                    <br />
                    <br />
                    <strong>Insights and Analytics:</strong> Make informed
                    business decisions and stay ahead of the competition with
                    data analytics and insights. Our team specializes in data
                    strategy development, data warehousing, integration,
                    visualization, and advanced analytics.
                    <br />
                    <br />
                    <strong>Cloud Services:</strong> Optimize your use of cloud
                    technology with our expertise in cloud infrastructure,
                    migration, security, and management. We can help you design
                    and implement a cloud strategy tailored to your needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ReactCardFlip>
          </Col>
          <Col sm={4}>
            <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal">
              <Card onClick={() => handleClick(1)} className="flipping-card">
                <Card.Body>
                  <div
                    style={{
                      borderRadius: "100%",
                      padding: "6px",
                      paddingLeft: "9px",
                      paddingRight: "0px",
                      color: "#6936F4",
                      textAlign: "left",
                      marginRight: "15rem",
                    }}
                    className="btn btn-light btn-social"
                  >
                    <i className="fa-regular fa-lightbulb fa-xl"></i>
                  </div>
                  <h3 className="mt-2" style={{ textAlign: "justify" }}>
                    Development & Products
                  </h3>
                  <p className="mb-4" style={{ textAlign: "left" }}>
                    Our team of experts is dedicated to creating cutting-edge
                    products and services that help organizations improve their
                    operations and drive growth. With our expertise in e-water
                    management, software development, and emerging technologies,
                    we are able to provide our clients with a wide range of
                    customized solutions that address their specific needs and
                    goals. Whether you're looking for a new software solution to
                    improve efficiency or a new technology product to stay ahead
                    of the competition, we can help you achieve your objectives.
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
                    Learn More
                  </div>
                </Card.Body>
              </Card>
              <Card onClick={() => handleClick(1)} className="flipping-card">
                <Card.Body>
                  <Card.Title>Development & Products</Card.Title>
                  <Card.Text>
                    <strong>Software Development:</strong> Our software
                    development team specializes in creating custom software
                    solutions that meet the unique needs of our clients. With
                    experience in various industries and technologies, we can
                    help improve efficiency, streamline operations, and stay
                    ahead of the competition.
                    <br />
                    <br />
                    <strong>E-Waste Management:</strong> We understand the
                    importance of e-waste management and its impact on the
                    environment. Our e-waste management solution, the eBin,
                    creates an ecosystem for responsible disposal and recycling
                    of electronic waste. It promotes the circular economy and
                    sustainable development.
                    <br />
                    <br />
                    <strong>System Design:</strong> We specialize in creating
                    new products tailored to specific industries based on
                    cutting-edge technology. Our team conducts extensive
                    research and development to identify opportunities and
                    create innovative solutions that address the unique needs of
                    our clients. We provide detailed white papers to showcase
                    the product's features and benefits to help clients make
                    informed decisions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ReactCardFlip>
          </Col>
          <Col sm={4}>
            <ReactCardFlip isFlipped={isFlipped[2]} flipDirection="horizontal">
              <Card onClick={() => handleClick(2)} className="flipping-card">
                <Card.Body>
                  <div
                    style={{
                      borderRadius: "100%",
                      padding: "6px",
                      paddingLeft: "9px",
                      paddingRight: "0px",
                      color: "#6936F4",
                      textAlign: "left",
                      marginRight: "15rem",
                    }}
                    className="btn btn-light btn-social"
                  >
                    <i className="fa-regular fa-lightbulb fa-xl"></i>
                  </div>
                  <h3 className="mt-2" style={{ textAlign: "justify" }}>
                    Edtek Academy
                  </h3>
                  <p className="mb-4" style={{ textAlign: "left" }}>
                    Edtek Academy is a leading institution focused on research
                    and innovation in developing solutions to pressing problems
                    and opportunities. Our approach to research and innovation
                    is a systematic and evidence-based process that starts with
                    problem identification and ends with dissemination of
                    successful solutions. Our goal is to create impactful and
                    sustainable solutions that bring about positive change in
                    the world. Through our commitment to rigorous research and
                    effective solution development, Edtek Academy is well
                    positioned to drive progress and improve lives.
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
                    Learn More
                  </div>
                </Card.Body>
              </Card>
              <Card onClick={() => handleClick(2)} className="flipping-card">
                <Card.Body>
                  <Card.Title>Research & Innovation</Card.Title>
                  <Card.Text>
                    Edtek Academy is a leading institution focused on research
                    and innovation in developing solutions to pressing problems
                    and opportunities. Our approach to research and innovation
                    is a systematic and evidence-based process that starts with
                    problem identification and ends with dissemination of
                    successful solutions. Our goal is to create impactful and
                    sustainable solutions that bring about positive change in
                    the world. Through our commitment to rigorous research and
                    effective solution development, Edtek Academy is well
                    positioned to drive progress and improve lives.
                  </Card.Text>
                  <Card.Title>Skills Development</Card.Title>
                  <Card.Text>
                    We understand the importance of e-waste management and the
                    impact it has on the environment. We offer an e-waste
                    management solution called the eBin, which creates an
                    ecosystem for responsible disposal and recycling of
                    electronic waste. Our solution not only helps to reduce the
                    environmental impact of e-waste but also promotes the
                    circular economy and sustainable development.
                  </Card.Text>
                  <Card.Title>Products</Card.Title>
                  <Card.Text>
                    We specialize in creating new products that are tailored to
                    specific industries and based on cutting-edge technology.
                    Our team of experts conducts extensive research and
                    development to identify new opportunities and create
                    innovative solutions that address the unique needs of our
                    clients. We offer our clients a white paper detailing the
                    product, its features, and how it can benefit their specific
                    industry so they can make an informed decision before
                    deciding to invest in our products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ReactCardFlip>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlippingCards;
