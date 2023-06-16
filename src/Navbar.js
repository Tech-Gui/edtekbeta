import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
    setTimeout(() => {
      animation();
    });
  };

  return (
    <div
      className="navbar-wrapper"
      style={{
        background: "rgb(15, 12, 31)",
      }}
    >
      <Container>
        <Nav className="navbar navbar-expand-lg ">
          <a
            style={{
              color: "#fff",
            }}
            href="#"
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
              style={{ height: "50px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            onClick={handleToggle}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <i className="fas fa-times text-white"></i> // "X" icon when toggled
            ) : (
              <i className="fas fa-bars text-white"></i> // Hamburger icon when not toggled
            )}
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end `}
            id="navbarSupportedContent"
          >
            <div className={` ${isOpen ? "navbar-collapse-open" : ""}`}>
              <ul className="navbar-nav ml-auto d-flex justify-content-end">
                {/* <div className="hori-selector">
                  <div className="left"></div>
                  <div className="right"></div>
                </div> */}

                <li className="nav-item active">
                  <a href="#">Home</a>
                </li>

                <li className="nav-item">
                  <a href="#services">Services</a>
                </li>

                <li className="nav-item">
                  <a href="#about">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="#projectHeader">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#contact1">
                    <Button
                      style={{
                        backgroundColor: "#6936F4",
                        borderRadius: "25px",
                        borderColor: "#6936F4",
                        transform: "translateY(-0.5rem)",
                      }}
                      className="gradient-button"
                    >
                      Contact Us
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </Container>
    </div>
  );
};
export default Navbar;
