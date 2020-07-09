import React, { Component } from "react";
import "./WritingGoal.css";
import { Modal, Row, Col, Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import apiUser from "../../utils/apiUser";
import StarsIcon from "@material-ui/icons/Stars";

export class WritingGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 0,
      goalDate: "",
      startGoalDate: "",
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
  handleSave = () => {
    const userGoal = {
      goal: this.state.goal,
      goalDate: this.state.goalDate,
      startGoalDate: this.state.startGoalDate,
    };
    apiUser.updateUser(localStorage.getItem("id"), userGoal).then((User) => {});
    window.location.reload();
  };

  render() {
    const setGoalBtn = {
      color: "white",
      backgroundColor: "#88498f",
      margin: "10px",
    };

    return (
      <>
        <Button
          style={setGoalBtn}
          variant="contained"
          onClick={() => this.setState({ show: true })}
        >
          <StarsIcon />
          &nbsp; Set A Writing Goal
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
            <Form>
              <Modal.Header closeButton>
                <Modal.Title
                  style={{ fontFamily: "Ribeye Marrow", fontSize: "3rem" }}
                  id="contained-modal-title-vcenter"
                >
                  Writing Goal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="">
                  <div className="modalImage">
                    <Row>
                      <Col sm={6}>
                        <Form.Group controlId="goal">
                          <Form.Label
                            style={{
                              fontFamily: "Montserrat Alternates",
                              fontWeight: "bold",
                            }}
                          >
                            MY GOAL WORD COUNT:
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="words"
                            placeholder={this.state.goal}
                            value={this.state.goal}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <Form.Group controlId="startGoalDate">
                          <Form.Label
                            style={{
                              fontFamily: "Montserrat Alternates",
                              fontWeight: "bold",
                            }}
                          >
                            Start Date of My Goal:
                          </Form.Label>
                          <Form.Control
                            type="Date"
                            name="date"
                            placeholder={this.state.startGoalDate}
                            value={this.state.startGoalDate}
                            onChange={this.handleChange}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <Form.Group controlId="goalDate">
                          <Form.Label
                            style={{
                              fontFamily: "Montserrat Alternates",
                              fontWeight: "bold",
                            }}
                          >
                            Reach My Goal By This Date:
                          </Form.Label>
                          <Form.Control
                            type="Date"
                            name="date"
                            placeholder={this.state.goalDate}
                            value={this.state.goalDate}
                            onChange={this.handleChange}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.handleSave();
                    this.setState({ show: false });
                  }}
                >
                  SAVE
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}
