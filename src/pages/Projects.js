import React from "react";
import "./Dashboard.css";

import { Container, Col, Row, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries";

function Dashboard() {
  const { user } = useAuth0();

  return (
    <div>
      <h1> {user ? `${user.name}'s` : null} Projects</h1>

      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={12}>
            <Image
              src="./assets/images/avatar2.png"
              width={150}
              height={150}
              style={{ marginTop: "20px" }}
              roundedCircle
            />
            <h6>{user ? `${user.name}` : null}</h6>
          </Col>
          {/* <Col className="content dash2" sm={8}></Col> */}
        </Row>
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <PopulateEntries />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
