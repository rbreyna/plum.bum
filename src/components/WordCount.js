import React, { Component } from "react";
import { Button, Col, Row, FormControl,  InputGroup} from "react-bootstrap";
import "../pages/Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import apiEntry from "../utils/apiEntry";



export default class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entryBody: "",
      wordCount: 0,
         
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
      title: this.state.title,
      entryBody: this.state.entryBody,
    };

    console.log(newEntry)
    apiEntry.createEntries(newEntry)
      .then(this.setState({
        message: alert("Your pasage is saved"),
        title: "",
        entryBody: " "
      }));
      
     
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
      <div className="wordcount">
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <InputGroup>
              <br></br>
              <InputGroup id="passage-title" sm={12}>
                <InputGroup.Prepend>
                  <InputGroup.Text
                  >
                    Name of Passage
                </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={this.state.title}
                  name="title"
                  type="text"
                  className="form-control"
                  onChange={this.handleinputText} />
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
              <FontAwesomeIcon icon={faEdit} />  : {this.countWords(this.state.entryBody)}
            </h3>
          </Col>
          <Col sm={4}>
            <Button id="btns" onClick={this.handleSave}>
              <FontAwesomeIcon icon={faSave} />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
