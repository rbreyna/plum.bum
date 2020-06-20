import React, {Component} from "react";

import {Modal, Button, Row, Col, Form} from "react-bootstrap";

export class WritingGoal extends Component{
    constructor(props){
        super(props);

       // this.state = {
        //  userId: "",
       // };
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
              <div className="modalImage">
                  <img src="https://images.unsplash.com/photo-1555431189-0fabf2667795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" 
    alt="modal pic" />

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
                                name="WORDS"
                            
                               />
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
              </div>
              
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>SAVE</Button>
        </Modal.Footer>
      </Modal>

    )
}
}