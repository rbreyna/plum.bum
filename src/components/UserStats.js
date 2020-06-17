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
          <p>
            Will include current daily word count, best daily word count, number
            of days written consecutively, and goals
          </p>
        </Col>
      </Row>
      <div></div>
    </Container>
  );
}

export default UserStats;
