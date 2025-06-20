import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar ref={navbarRef} expand="lg" className={`${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`} expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand href="/" onClick={() => setExpanded(false)}>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#stats"
                className={
                  activeLink === "stats" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("stats")}
              >
                Statistics
              </Nav.Link>

              <Nav.Link
                href="#connect"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/satyajeet-rao/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                {/* <a href="#">
                  <img src={navIcon2} alt="" />
                </a> */}
                <a
                  href="https://github.com/SatyajeetKumarRao"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              {/* <HashLink to="#connect"> */}

              <a
                href="https://drive.google.com/uc?export=download&id=1UM_98nioX3HiU-s8obtXpUy_kl89HXlE"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="vvd"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1UM_98nioX3HiU-s8obtXpUy_kl89HXlE/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  <span>Resume</span>
                </button>
              </a>

              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
