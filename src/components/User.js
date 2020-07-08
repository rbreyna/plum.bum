import React, { Component } from "react";
import { Image, Modal, Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import apiUser from "../utils/apiUser";

class User extends Component {
  constructor(props) {
    super(props);

    //Set state to the props passed from the dbUser object prop so that
    //information can be rendered to the screen
    this.state = {
      name: props.dbUser.name,
      email: props.dbUser.email,
      picture: props.dbUser.picture,
      id: props.dbUser.id,
      show: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //Auth0 passes null values on mount, once the object is loaded and passed,
  //the updated props can be rendered to the screen
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        name: this.props.dbUser.name,
        email: this.props.dbUser.email,
        picture: this.props.dbUser.picture,
        id: this.props.dbUser.id,
      });
    }
  }

  //Update state when model is edited
  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
  }

  //When save button is clicked in model, the values are updated in the record using the ID
  updateUserInfo() {
    apiUser
      .updateUser(this.props.dbUser.id, {
        $set: {
          name: this.state.name,
          email: this.state.email,
        },
      })
      .catch((err) => {
        throw err;
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
        {/*User information rendered onto the screen */}
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

          {/* Modal that allows user to update their name and email*/}
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
