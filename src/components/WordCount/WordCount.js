import React, { Component } from "react";
import { Button, Col, Row, FormControl, InputGroup } from "react-bootstrap";
import "../../pages/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import apiEntry from "../../utils/apiEntry";
import GoalReached from "../WritingGoal/GoalReached";
import apiUser from "../../utils/apiUser";
import { updateLocale } from "moment";

export default class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entryBody: "",
      wordCount: 0,
      auth0_id: "",
    };
  }

  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  //Input
  handleinputText = (event) => {
    event.preventDefault();
    this.setState({ title: event.target.value });
    console.log("TextInput" + event.target.value);
  };

  //Textarea
  handleTextarea = (event) => {
    event.preventDefault();
    this.setState({ entryBody: event.target.value });
    console.log("TextTarea" + event.target.value);
  };

  /* It works but still waiting in how can we get user credentials*/
  handleSave = (event) => {
    event.preventDefault();

    const newEntry = {
      auth0_id: localStorage.getItem("auth0_id"),
      title: this.state.title,
      entryBody: this.state.entryBody,
    };

    console.log(newEntry);

    // Idalmys solution to Goal wordcount
    // apiUser.findUser("id")
    // .then(user_info => {
    //   if ((user_info.startGoalDate === Date.now) || (user_info.goalDate !== Date.now)){
    //     counts = countwords(this.state.entrybody) + user_info.Totalword
    //     if (counts >= goal){
    //       updateUser({Totalword: counts})
    //       .then(user_info => {
    //         console.log(user_info)
    //       })
    //     }
    //   }
    // })

    console.log(this.state.auth0_id, "auth0_id");

    apiEntry.createEntry(this.state.auth0_id, newEntry).then(
      this.setState({
        message: alert("Your pasage is saved"),
        title: "",
        entryBody: " ",
      })
    );

    window.location.reload();
  };
  render() {
    return (
      <div className="wordcount">
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <InputGroup>
              <br></br>
              <InputGroup id="passage-title" sm={12}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Name of Passage</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={this.state.title}
                  name="title"
                  type="text"
                  className="form-control"
                  onChange={this.handleinputText}
                />
                <br></br>
              </InputGroup>
              <FormControl
                value={this.state.entryBody}
                name="bodyEntry"
                type="text"
                className="form-control"
                onChange={this.handleTextarea}
                id="passage"
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h3>
              <FontAwesomeIcon icon={faEdit} /> :{" "}
              {this.countWords(this.state.entryBody)}
            </h3>
          </Col>
          <Col sm={4}>
            <Button id="btns" onClick={this.handleSave}>
              <FontAwesomeIcon icon={faSave} />
              <>
                {/*when save btn is clicked need to goto GoalReached.js so modal pops up*/}
                <GoalReached />
              </>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
