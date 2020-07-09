import React, { Component } from "react";
import { Col, Row, FormControl, InputGroup, Form } from "react-bootstrap";
import apiEntry from "../../utils/apiEntry";
import SaveButton from "./SaveButton";
import DisplaySessionCount from "./DisplaySessionCount";

export default class WordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entryBody: "",
      wordCount: 0,
      entryID: "",
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
    console.log(value);
  }

  handleSave = (event) => {
    event.preventDefault();

    console.log("Save FAB clicked.");

    const newEntry = {
      auth0_id: localStorage.getItem("id"),
      title: this.state.title,
      entryBody: this.state.entryBody,
    };

    if (this.state.entryBody.length > 0 && this.state.title.length > 0) {
      apiEntry.createEntry(localStorage.getItem("id"), newEntry).then(
        this.setState({
          message: alert("Your project has been saved!"),
          title: "",
          entryBody: " ",
        })
      );
      window.location.reload();
    } else {
      this.setState({
        message: alert(
          "Uh-oh, looks like you need to fill out the form completely before you can submit."
        ),
      });
    }
  };

  render() {
    const camo = {
      backgroundColor: "#a8e6cf",
    };

    const formTextStyle = {
      border: "#a8e6cf 1px solid",
      fontFamily: "Montserrat Alternates",
      fontSize: "1.2rem",
      color: "black",
      "&:focus": {
        outline: "black",
      },
    };

    return (
      <>
        <Form>
          <Row className="fluid" id="row-2">
            <Col sm={12}>
              <InputGroup>
                <br></br>
                <InputGroup id="passage-title" sm={12}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{
                        color: "black",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "1.2rem",
                        backgroundColor: "#dcedc1",
                      }}
                    >
                      Title | Chapter
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    style={formTextStyle}
                    id="title"
                    value={this.state.title}
                    placeholder="Enter the title of your project or chapter"
                    name="title"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <br></br>
                </InputGroup>
                <FormControl
                  style={formTextStyle}
                  id="entryBody"
                  value={this.state.entryBody}
                  name="bodyEntry"
                  type="text"
                  placeholder="This is how you do it: you sit down at the keyboard and you put one word after another until it's done. It's that easy, and that hard.  -   Neil Gaiman"
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
              <DisplaySessionCount
                wordCount={this.countWords(this.state.entryBody)}
              />
            </Col>
            <Col sm={4}>
              <div
                style={camo}
                id="btns"
                onClick={this.handleSave}
                /*disabled={!this.state.formValid}*/
              >
                <SaveButton />
              </div>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
