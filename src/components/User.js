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
import apiUser from "../utils/apiUser";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      id: "",
      show: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      email: this.props.email,
      picture: this.props.picture,
      id: this.props.id,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      apiUser
        .findUser(this.state.id)
        .then((res) => {
          console.log("User found!");
          console.log(res);
          this.setState({
            name: res.data[0].name,
            email: res.data[0].email,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
  }

  updateUserInfo() {
    apiUser
      .updateUser(this.state.id, {
        $set: {
          name: this.state.name,
          email: this.state.email,
        },
      })
      .then((res) => {
        console.log("User updated!");
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });

    apiUser
      .findUser(this.state.id)
      .then((res) => {
        console.log("User found!");
        console.log(res);
        this.setState({
          name: res.data[0].name,
          email: res.data[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Card style={{ backgroundColor: "#a8e6cf" }} className="text-center">
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
            <Button
              onClick={() => this.setState({ show: true })}
              variant="secondary"
            >
              Update Profile
            </Button>

            <Modal
              show={this.state.show}
              onHide={() => {
                this.setState({ show: false });
              }}
            >
              <Modal.Header closeButton>
                <h1>Update Your Profile.</h1>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder={this.state.name}
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder={this.state.email}
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  onClick={() => {
                    this.setState({ show: false });
                    this.updateUserInfo();
                  }}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default User;
