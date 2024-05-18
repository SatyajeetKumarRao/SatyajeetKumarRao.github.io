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
                      A Full-stack web development student from Masai School.
                      With an experience in implementing MERN stack, I am
                      looking forward to work as a developer and create
                      meaningful products. My experience at Masai School was
                      extremely enriching. I implemented HTML, CSS, Javascript,
                      Mongodb, Node.js, Express in my projects. In addition, I
                      sharpened my creativity, problem-solving and collaboration
                      skills. Now, I look forward to utilizing my skills in
                      building user-centric products that challenge my
                      abilities.
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
