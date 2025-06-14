import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import minorProjImg1 from "../assets/img/minor-project-img1.png";
import minorProjImg2 from "../assets/img/minor-project-img2.png";
import minorProjImg3 from "../assets/img/minor-project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "FitMate",
      description: "Fitness Tracking",
      imgUrl: projImg1,
      githubUrl:
        "https://github.com/SatyajeetKumarRao/FitMate",
      deployedLink: "https://fitmatespace.vercel.app/",
    },
    {
      title: "StayBnb",
      description: "Property/Hotel Booking",
      imgUrl: projImg2,
      githubUrl: "https://github.com/AbhinavTyagi30/StayBnB",
      deployedLink: "https://stay-bnb-in.vercel.app/",
    },
    {
      title: "BasketBlend",
      description: "Grocery Store",
      imgUrl: projImg3,
      githubUrl: "https://github.com/SatyajeetKumarRao/basket-blend",
      deployedLink: "https://basket-blend.vercel.app/",
    },
  ];

  const minorProjects = [
    {
      title: "Saviours",
      description: "User-friendly dashboard with Figma (Responsive) design.",
      imgUrl: minorProjImg3,
      githubUrl:
        "https://github.com/SatyajeetKumarRao/BlockchainWarriors",
      deployedLink: "https://blockchain-warriors.vercel.app/",
    },
    {
      title: "Times Sentinel",
      description: <span>Create a look-a-like landing page from <a href="https://time.com" target="_blank" style={{ color: 'aquamarine' }}>https://time.com</a></span>,
      imgUrl: minorProjImg1,
      githubUrl: "https://github.com/Koshur1504/code-commander-4567",
      deployedLink: "https://65ae04a6f20cd1fa3376718e--spiffy-puffpuff-6779eb.netlify.app/",
    },
    {
      title: "Pixel",
      description: "Pixel perfect design from a figma template. Responsive design using (SASS).",
      imgUrl: minorProjImg2,
      githubUrl: "https://github.com/Koshur1504/code-commander-4567",
      deployedLink: "https://code-commander-4567.vercel.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. */}
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Major Projects</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Minor Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {minorProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bgImage"
      ></img>
    </section>
  );
};
