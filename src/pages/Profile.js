import React, { Component } from "react";
import { Jumbotron, Button, Card, Col, Row, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import ProfileModal from "../components/ProfileModal";
//import { render } from "@testing-library/react";

export default function Profile() {

  const [modalShow, setModalShow] = React.useState(false);

  const { user } = useAuth0();

  const name = user ? user.name : null;
  const email = user ? user.email : null;
  const picture = user ? user.picture : null;

  return (
    <div>
      <Card bg="info" className="text-center">
        <Card.Header>
          <Jumbotron>
            <h1>
              <strong>Profile Page for {name}</strong>
            </h1>
          </Jumbotron>
        </Card.Header>
        <Card.Body>
          <Jumbotron>
            <Row className="block-example border border-0 border-dark">
              Personal Info
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <Image
                  src={picture}
                  width={200}
                  height={200}
                  style={{ marginTop: "20px" }}
                  roundedCircle
                />
              </Col>
              <Col xs={6} md={4}>
                <h4>Name</h4>
                <p>{name}</p>
              </Col>
              <Col xs={6} md={4}>
                <h4>Email</h4>
                <p>{email}</p>
              </Col>
            </Row>
          </Jumbotron>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button onClick={() => setModalShow(true)} variant="secondary">
            Update Profile
          </Button>
          <ProfileModal 
            show={modalShow}
            name={name}
            email={email}
            picture={picture}
          />
        </Card.Footer>
      </Card>
    </div>
  );
}
