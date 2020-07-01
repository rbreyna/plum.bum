
import React, { Component } from "react";
import "./WritingGoal.css";
import Moment from "react-moment";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


export class WritingGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordGoal: 0,
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
                        <Form.Label>MY WORD GOAL COUNT:</Form.Label>
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
                        <Form.Label>BY THIS DATE:</Form.Label>
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

                </div>

              </div>


            </Modal.Body>
            <Modal.Footer>
              <Button  onClick={() => {
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