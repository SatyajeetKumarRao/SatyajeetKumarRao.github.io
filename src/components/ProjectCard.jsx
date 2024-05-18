import { Col } from "react-bootstrap";

import { Github, RocketFill } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  deployedLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="proj-buttons-git-deploy">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="proj-git-btn ui-btn"
        >
          <span>
            <Github /> Github
          </span>
        </a>
        <a
          href={deployedLink}
          target="_blank"
          rel="noreferrer"
          className="proj-deploy-btn"
        >
          <RocketFill /> Deployed
        </a>
      </div>
    </Col>
  );
};
