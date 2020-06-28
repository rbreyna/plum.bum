import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Card,
  Col,
  Row,
  Image,
  Modal,
  Form,
} from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      email: this.props.email,
      picture: this.props.picture,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      name: event.target.name.value,
      email: event.target.email.value,
      show: false
    });
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
            <Jumbotron>
              <Row className="block-example border border-0 border-dark">
                Personal Info
              </Row>

              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src={this.state.picture}
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
          </Card.Body>

          <Card.Footer className="text-muted">
            <Button onClick={()=> this.setState({show: true})} variant="secondary">
              Update Profile
            </Button>

            <Modal show = {this.state.show} onHide={() => {this.setState({show: false})}}>
              <Modal.Header closeButton>
                <h1>Verify your profile information</h1>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group controlId="formGroupProfile">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      value={this.state.name}
                    />
              
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email address"
                      value={this.props.email}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleSubmit}>Save</Button>
              </Modal.Footer>
            </Modal>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default User;
