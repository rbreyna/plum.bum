import React from "react";
import "./Projects.css";
import { Container, Col, Row, Image, Jumbotron } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries/PopulateEntries.js";

function Dashboard() {
  const { user } = useAuth0();

  return (
    <div>
      <Jumbotron className="Projects-tron">
        <h1> {user ? `${user.name}'s` : null} Projects</h1>
        <Image
          src="../assets/images/avatar1.png"
          width={150}
          height={150}
          style={{ marginTop: "20px" }}
          roundedCircle
        />
        <h6>{user ? `${user.name}` : null}</h6>
      </Jumbotron>

      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={12}></Col>
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
