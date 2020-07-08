import React, { Component } from "react";
import "./WritingGoal.css";
import { Modal, Row, Col, Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import apiUser from "../../utils/apiUser";
import StarsIcon from "@material-ui/icons/Stars";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

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

  onChange = (goalSetDate) => {
    this.setState({ goalSetDate: goalSetDate });
    console.log(goalSetDate);
  };

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
    console.log("goal", value);
  }
  handleSave = () => {
    const userGoal = {
      goal: this.state.wordGoal,
      goalDate: this.state.goalSetDate,
      startGoalDate: this.state.dateSetGoal,
    };
    apiUser.updateUser(localStorage.getItem("id"), userGoal).then((User) => {
      console.log(User);
    });
    window.location.reload();
  };
  render() {
    const setGoalBtn = {
      color: "white",
      backgroundColor: "#88498f",
      margin: "10px",
    };

    //You must validate form because the user can not select a day before today
    //Example: if today is july 4 the user can not select july 3

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
            <Form onSubmit={this.handleSubmit}>
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
                        <Form.Group controlId="wordGoal">
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
                            placeholder={this.state.goalSetDate}
                            value={this.state.goalSetDate}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* <Row>
                  <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={this.state.goalSetDate}
                  onChange={this.onChange}
                  minDate= {Date.now()}
                  /> 
                  </Row> */}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* roy is working to save the data to the database */}
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
