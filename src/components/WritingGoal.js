import React, {Component} from "react";

import {Modal, Button, Row, Col, Form} from "react-bootstrap";

export class WritingGoal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();

        alert(event.target.WORDS.value);
    }


render(){
    return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Writing Goal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">

              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="WordsWrittenGoal">
                              <Form.Label>WORDS:</Form.Label>
                              <Form.Control
                                type="number"
                                name="WORDS"
                            
                               />
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="WordsWrittenGoal">
                              <Form.Label>BY THIS DATE:</Form.Label>
                              <Form.Control
                                type="date"
                                name="GoalDate"
                            
                               />
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>SAVE</Button>
        </Modal.Footer>
      </Modal>

    )
}
}