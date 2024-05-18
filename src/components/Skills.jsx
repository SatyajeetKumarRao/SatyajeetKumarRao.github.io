import javascript from "../assets/img/skills/javascript.png";
import mongodb from "../assets/img/skills/mongodb.png";
import redux from "../assets/img/skills/redux.png";
import css from "../assets/img/skills/css.png";
import html from "../assets/img/skills/html.png";
import express from "../assets/img/skills/express.png";
import node from "../assets/img/skills/node.png";
import react from "../assets/img/skills/react.png";
import npm from "../assets/img/skills/npm.png";
import postman from "../assets/img/skills/postman.png";
import vercel from "../assets/img/skills/vercel.png";
import vscode from "../assets/img/skills/vscode.png";
import mysql from "../assets/img/skills/mysql.png";
import chakra from "../assets/img/skills/chakra.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import tailwind from "../assets/img/skills/tailwind.png";
import sass from "../assets/img/skills/sass.png";
import render from "../assets/img/skills/render.png";
import github from "../assets/img/skills/github.png";

import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const skillsList = [
    {
      title: "HTML",
      imgUrl: html,
    },
    {
      title: "CSS",
      imgUrl: css,
    },
    {
      title: "JavaScript",
      imgUrl: javascript,
    },
    {
      title: "React",
      imgUrl: react,
    },
    {
      title: "Redux",
      imgUrl: redux,
    },
    {
      title: "NodeJS",
      imgUrl: node,
    },
    {
      title: "ExpressJS",
      imgUrl: express,
    },

    {
      title: "MongoDB",
      imgUrl: mongodb,
    },
    {
      title: "MySQL",
      imgUrl: mysql,
    },
    {
      title: "SASS",
      imgUrl: sass,
    },
    {
      title: "Chakra UI",
      imgUrl: chakra,
    },
    {
      title: "Bootstrap",
      imgUrl: bootstrap,
    },
    {
      title: "Tailwind CSS",
      imgUrl: tailwind,
    },
    {
      title: "Postman",
      imgUrl: postman,
    },
    {
      title: "VS Code",
      imgUrl: vscode,
    },
    {
      title: "NPM",
      imgUrl: npm,
    },
    {
      title: "Github",
      imgUrl: github,
    },
    {
      title: "Vercel",
      imgUrl: vercel,
    },
    {
      title: "Render",
      imgUrl: render,
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. */}
              </p>

              <Container>
                <Row xs={2} md={4} lg={6}>
                  {skillsList.map((skill, index) => {
                    return (
                      <Col key={index}>
                        <img
                          src={skill.imgUrl}
                          alt={skill.title}
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                        <p>{skill.title}</p>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bgImage" />
    </section>
  );
};
