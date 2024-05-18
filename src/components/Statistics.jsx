import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Container, Row } from "react-bootstrap";

const Statistics = () => {
  return (
    <Container id="stats" className="stats">
      <h2>Statistics</h2>

      <Container>
        <Row lg={3} md={2} xs={1}>
          <Col className="statsCard">
            <img
              src="https://github-readme-stats.vercel.app/api?username=SatyajeetKumarRao&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
              alt=""
            />
          </Col>

          <Col className="statsCard">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=SatyajeetKumarRao&theme=dark&hide_border=true"
              alt=""
            />
          </Col>

          <Col className="statsCard">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SatyajeetKumarRao&theme=dark&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      <Container className="statsCard">
        <GitHubCalendar username="satyajeetkumarrao" />
      </Container>

      <Container className="statsCard">
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=SatyajeetKumarRao&bg_color=151515&color=a67025&line=a67025&point=f5a536&area=true&hide_border=true"
          alt=""
        />
      </Container>
    </Container>
  );
};

export { Statistics };
