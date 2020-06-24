import React, {Component} from "react";
import "./WritingGoal.css"

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
        <div className="modal-container">

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
        </div>
      </Modal>

      

    )
}
}