import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class ProfileModal extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: "",
          email: "",
          picture: ""
        }
    }
    componentDidMount(){
      this.setState({
        name: this.props.name,
        email: this.props.email,
        picture: this.props.picture
      })
    }

    handleSubmit(event){
      event.preventDefault();

      this.setState({
        name: event.target.name.value,
        email: event.target.email.value,
        picture: event.target.picture.value
      })
      const [ModalShow, setModalShow] = React.useState(false);
    }

  render() {
    return (
      <>
      <Modal {...this.props}>
        <Modal.Header>
          <h1>Verify your profile information</h1>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupProfile">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name = "name" placeholder="Enter Full Name" value ={this.props.name} />
            </Form.Group>
            <Form.Group controlId="formGroupProfile">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" name = "email" placeholder="Enter email address" value ={this.props.email} />
            </Form.Group>
            <Form.Group controlId="formGroupProfile">
            <Form.Control type="text" name = "picture" placeholder={this.props.picture} value={this.props.picture} readOnly />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit}>SAVE</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default ProfileModal;
