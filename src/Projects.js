import React from "react";
import { Card, Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from "./Services";

function CurrentProjects() {
  const projects = [
    {
      id: 1,
      title: "Project A",
      description: "Description of Project A",
      image: "p1.jpg",
    },
    {
      id: 2,
      title: "Project B",
      description: "Description of Project B",
      image: "p2.jpg",
    },
    {
      id: 3,
      title: "Project C",
      description: "Description of Project C",
      image: "p3.jpg",
    },
    {
      id: 4,
      title: "Project D",
      description: "Description of Project B",
      image: "p4.jpg",
    },
    {
      id: 5,
      title: "Project E",
      description: "Description of Project C",
      image: "p5.jpg",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#0F0C1F",
        }}
        id="projectHeader"
      >
        <Container>
          <h3 style={{ fontWeight: "bold" }} className="gradient-text1">
            Current Projects
          </h3>

          <h6 style={{ color: "#fff" }}>
            Ready to embark on a journey of innovation and excellence? <br />
            Join us as we dive into our exciting projects and discover limitless
            possibilities together.
          </h6>
        </Container>
      </div>
      <Container
        className="d-flex justify-content-center"
        id="projects"
        style={{
          zIndex: 999,
        }}
      >
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item"
              style={{ color: "#fff", zIndex: 1, position: "relative" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/" + project.image}
                alt={project.title}
                style={{
                  borderRadius: "2rem",
                  zIndex: 999,
                }}
                id="projectImage"
                className="lift-card1"
              />
              {/* <p className="mb-2">{project.description}</p> */}
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default CurrentProjects;
