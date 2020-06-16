import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserImage from "./UserImage";

function UserStats(props) {
  return (
    <Container>
      <Row>
        <Col md={2} lg={2}>
          <UserImage />
        </Col>
        <Col style={{ backgroundColor: "lightpink" }}>
          <h1>Stats Placeholder</h1>
        </Col>
      </Row>
      <div></div>
    </Container>
  );
}

export default UserStats;
