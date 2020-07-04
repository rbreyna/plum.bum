
import React, { Component } from "react";
import "./WritingGoal.css";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import apiUser from "../../utils/apiUser";

export class WritingGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordGoal: 0,
      goalSetDate: Date.now(),
      dateSetGoal: Date.now(),
      todaysDate: Date.now(),
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
    console.log("goal", value);
  }
  handleSave = () =>{
    const userGoal={
      goal: this.state.wordGoal,
      goalDate: this.state.goalSetDate,
      startGoalDate : this.state.dateSetGoal
    }
    apiUser
      .updateUser(localStorage.getItem("auth0_id"), userGoal)
      .then(User =>{
        console.log(User)
      })
          
  }
  render() {
    return (
      <>
      <Button onClick={() => this.setState({ show: true })}>
        <p>Writing Goal:</p>
      </Button>
      <Modal
        show={this.state.show}
        onHide={() => {
          this.setState({ show: false });
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-container">
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Writing Goal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                <div className="modalImage">
                  <Row>
                    <Col sm={6}>
                      <Form.Group controlId="wordGoal">
                        <Form.Label>MY GOAL WORD COUNT:</Form.Label>
                        <Form.Control
                          type="number"
                          name="words"
                          placeholder={this.state.wordGoal}
                          value={this.state.wordGoal}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group controlId="dateSetGoal">
                        <Form.Label>Start Date of My Goal:</Form.Label>
                        <Form.Control
                          type="Date"
                          name="date"
                          placeholder={this.state.dateSetGoal}
                          value={this.state.dateSetGoal}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Group controlId="goalSetDate">
                        <Form.Label>Reach My Goal By This Date:</Form.Label>
                        <Form.Control
                          type="Date"
                          name="date"
                          placeholder={this.state.goalSetDate}
                          value={this.state.goalSetDate}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* roy is working to save the data to the database */}
              <Button  onClick={() => {
                this.handleSave()
                this.setState({ show: false });
              }}>SAVE</Button>
            </Modal.Footer>
          </Form>
        </div>
      </Modal>
      </>
    )
  }
}

