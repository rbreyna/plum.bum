import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  FormControl,
  InputGroup,
  Image,
} from "react-bootstrap";
import "../pages/Dashboard.css";
import { useAuth0 } from "../contexts/auth0-context";
import axios from "axios";
import apiUser from "../../utils/apiUser";

export default class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textinput: "",
      textarea: "",
      totalWordCount: 0,
      wordCount: 0,
      wordCountThisWeek: 0,
      totalLifetimeCount: 0,
      userStats: [],
    };
  }

  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  handleinputText = (event) => {
    event.preventDefault();
    this.setState({ textinput: event.target.value });
    console.log("Text Input" + event.target.value);
  };

  handleTextarea = (event) => {
    event.preventDefault();
    this.setState({ textarea: event.target.value });
    console.log("Text Tarea" + event.target.value);
  };

  loadUserData = () => {
    apiUser
      .findUser()
      .then((user) => {
        // Grab time last saved (startStreakTime)
        let startStreakTime = user.data.startStreakTime;
        let clickTime = new Date();
        // If last time saved was less than 24 hours prior onClick or is null/0, don't update startStreakTime (which means we'll just continue our current streak)
        // If last time saved was more than 24 hours prior, startStreakTime becomes current clickTime; writing streak resets; update database with PUT
        console.log(clickTime, "---time");
      })
      .catch((err) => console.log(err));
  };

  // handleSave = (event) => {
  //   event.preventDefault();
  //   const { user } = useAuth0();
  //   let user_email = user.email;
  //   const newEntry = {
  //     title: this.state.InputField,
  //     entryBody: this.state.TextareaField,
  //   };
  //   axios
  //     .post("http://localhost:9000/api/entry/" + user_email, newEntry)
  //     .then(this.setState({ message: alert("Your passage is saved") }));
  // };

  render() {
    return (
      <Row className="fluid" id="row-2">
        <Col className="content dash3" sm={12}>
          <InputGroup>
            <br></br>
            <InputGroup id="passage-title" sm={12}>
              <InputGroup.Prepend>
                <InputGroup.Text
                  value={this.state.textinput}
                  name="textinput"
                  type="text"
                  className="form-control"
                  onChange={this.handleinputText}
                >
                  Name of Passage
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl />
              <br></br>
            </InputGroup>
            <FormControl
              value={this.state.textarea}
              name="textarea"
              type="text"
              className="form-control"
              onChange={this.handleTextarea}
              id="passage"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
          <Button id="btns" onClick={this.handleSave}>
            SAVE
          </Button>
        </Col>
        <p>Count Words : {this.countWords(this.state.textarea)} </p>
      </Row>
    );
  }
}
