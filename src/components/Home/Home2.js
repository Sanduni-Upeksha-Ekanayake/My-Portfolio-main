import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/picture.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillMediumSquare,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                IT Undergraduate Student at BCI Campus and aspiring Software Engineer
              </i>{" "}
              with hands-on experience in full-stack web and mobile development.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">Artificial Intelligence, Software Engineering, and Innovative Technologies</i> and 
                I enjoy solving real-world problems through technology.
              <br />
              <br />I am more interested in 
              <i>
                <i className="primary-header">Web Development, Mobile Applications, and Emerging Technologies</i>
                like AI and Machine Learning.
              </i>
              <br />
              <br />I have practical experience in{" "}
              <i className="primary-header">Angular, Spring Boot, Node.js, MongoDB, React.js, Flutter, Android Studio</i> and 
                other modern frameworks and tools, gained through academic projects and industry internships.
              <br />
              <br /> I always seek to{" "}
              <i className="primary-header">design impactful, user-friendly, and scalable solutions </i> while 
                continuously learning and building innovative projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Yasas2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sandunieka@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanduni-ekanayake/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/1CY5dY5YWK/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/up3kshaa.a?igsh=MThwZjVnbHh6aGh6YQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
