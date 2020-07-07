import React, { Component } from "react";
import { Button, Col, Row, FormControl, InputGroup, Form } from "react-bootstrap";
import "../../pages/Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import apiEntry from "../../utils/apiEntry";
import GoalReached from "../WritingGoal/GoalReached";


export default class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entryBody: "",
      wordCount: 0,

    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
    console.log(value)

  }

  handleSave = (event) => {
    event.preventDefault();

    const newEntry = {
      auth0_id: localStorage.getItem("id"),
      title: this.state.title,
      entryBody: this.state.entryBody,
    };

    if ((this.state.entryBody.length > 0) && (this.state.title.length > 0)) {

      apiEntry.createEntry(localStorage.getItem("id"), newEntry)
        .then(this.setState({
          message: alert("Your pasage is saved"),
          title: "",
          entryBody: " "
        }))

      window.location.reload();

    } else {
      this.setState({ message: alert("Must fill it out the fields") })
    }

  };
  render() {
    return (
      <div className="wordcount">
        <Form>
          <Row className="fluid" id="row-2">
            <Col className="content dash3" sm={12}>
              <InputGroup>
                <br></br>
                <InputGroup id="passage-title" sm={12} >
                  <InputGroup.Prepend>
                    <InputGroup.Text
                    >
                      Name of Passage
                </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="title"
                    value={this.state.title}
                    name="title"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange} />
                  <br></br>
                </InputGroup>
                <FormControl id="entryBody"
                  value={this.state.entryBody}
                  name="bodyEntry"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}

                  as="textarea"
                  aria-label="With textarea"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <h3>
                <FontAwesomeIcon icon={faEdit} />  : {this.countWords(this.state.entryBody)}
              </h3>
            </Col>
            <Col sm={4}>
              <Button id="btns"
                onClick={this.handleSave}
              /*disabled={!this.state.formValid}*/
              >
                <FontAwesomeIcon icon={faSave} />
                {/* <>
                  when save btn is clicked need to goto GoalReached.js so modal pops up
                  <GoalReached />
                </> */}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
