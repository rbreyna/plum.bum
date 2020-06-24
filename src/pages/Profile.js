import React, { Component } from "react";
import { Jumbotron, Button, Card, Col, Row, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Roy Reyna",
      email: "rreyna7@yahoo.com",
      pictureSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    };
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const { user } = useAuth0;

    const name = this.props.name;
    const email = this.props.email;
    const pictureSrc = this.props.pictureSrc;

    console.log(name);
    console.log(email);
    console.log(pictureSrc);
  }

  render() {
    return (
      <div>
        <Card bg="info" className="text-center">
          <Card.Header>
            <Jumbotron>
              <h1>
                <strong>Profile Page for {this.state.name}</strong>
              </h1>
            </Jumbotron>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Jumbotron>
                <Row className="block-example border border-0 border-dark">
                  <h4>Personal Info</h4>  
                </Row>
                
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      src={this.state.pictureSrc}
                      width={200}
                      height={200}
                      style={{ marginTop: "20px" }}
                      roundedCircle
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Name</h4>
                    <p>{this.state.name}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <h4>Email</h4>
                    <p>{this.state.email}</p>
                  </Col>
                </Row>
              </Jumbotron>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="secondary">Update Profile</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Profile;
