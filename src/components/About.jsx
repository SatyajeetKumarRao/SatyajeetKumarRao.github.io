import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp2.png";
import profileImage from "../assets/img/profile-img.png";
import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About</h2>

              <Container>
                <Row className="align-items-center">
                  <Col size={12} md={6}>
                    <img src={profileImage} alt="profileImage" />
                  </Col>
                  <Col size={12} md={6}>
                    <h3>Hello! I am Satyajeet Kumar Rao</h3>
                    <p>
                      I’m a Full-Stack Web Developer currently working at Procuzy, India’s first AI-enabled SaaS platform for mid-sized manufacturers. Over the past year (including a six-month internship), I’ve contributed to the development of scalable, end-to-end modules across procurement, inventory, production, and vendor workflows—helping streamline complex supply chain processes for B2B clients.
                      <br /><br />
                      I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and apply a strong focus on building secure, user-friendly, and performance-driven web applications. I completed my full-stack training at Masai School, where I gained hands-on experience with real-world projects and developed skills in collaboration, problem-solving, and product thinking.
                      <br /><br />
                      I’m passionate about delivering clean, efficient code and building meaningful digital products that simplify operational challenges and create lasting impact.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp} alt="bgImage" />
    </section>
  );
};
