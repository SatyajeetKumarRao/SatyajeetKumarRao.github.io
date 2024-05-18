import { Col } from "react-bootstrap";

import { EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";
// import github from "../assets/img/github.svg";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <h2>Connect With Me</h2>
        <h6>
          <EnvelopeAtFill /> Satyajeetrao.rao2@gmail.com
        </h6>
        <h6>
          <TelephoneFill /> +918920219730
        </h6>

        {/* <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <a
            href="https://github.com/SatyajeetKumarRao"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              style={{ width: "40px", height: "40px" }}
              alt="Icon"
            />
          </a>

          <a
            href="https://github.com/SatyajeetKumarRao"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              style={{ width: "40px", height: "40px" }}
              alt="Icon"
            />
          </a>

          <a
            href="https://github.com/SatyajeetKumarRao"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              style={{ width: "40px", height: "40px" }}
              alt="Icon"
            />
          </a>
        </div> */}
        {/* <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
          </Col>
          <Col md={6} xl={7}>
            Connect With Me harankhedkarsameer@gmail.com +917020064547
          </Col>
        </Row> */}
      </div>
    </Col>
  );
};
