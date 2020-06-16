import React from "react";
import "./Dashboard.css";
import { Container, Col, Row } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";

function Dashboard() {
  const { isLoading, user } = useAuth0();

  return (
    <div>
      <h1> User's Dashboard Page</h1>

      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={4}>
            sm=4
          </Col>
          <Col className="content dash2" sm={8}>
            sm=8
          </Col>
        </Row>
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            sm=12
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
