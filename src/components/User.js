import React, { Component } from "react";
import { Image, Modal, Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
    const personalInfo = {
      padding: "20px",
      textAlign: "left",
    };

    const pictureDiv = {
      textAlign: "right",
    };

    const profilePicture = {
      marginTop: "10px",
      marginRight: "30px",
      marginBottom: "30px",
    };

    const headerStyles = {
      fontFamily: "Ribeye Marrow",
      marginTop: "20px",
      marginBottom: "30px",
    };

    return (
      <>
        <h1 style={headerStyles}>{this.state.name}'s Profile</h1>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={4}>
            <div style={pictureDiv}>
              <Image
                src={this.state.picture}
                width={200}
                height={200}
                style={profilePicture}
                roundedCircle
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={personalInfo}>
              <h4>Name</h4>
              <p>{this.state.name}</p>
              <h4>Email</h4>
              <p>{this.state.email}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
        <div>
          <Button
            onClick={() => this.setState({ show: true })}
            variant="contained"
            color="secondary"
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
                variant="contained"
                color="primary"
                onClick={() => {
                  this.setState({ show: false });
                  this.updateUserInfo();
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default User;
