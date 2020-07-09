import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import CreateNewEntry from "./CreateNewEntry";
import {
  Modal,
  Col,
  Row,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import DisplaySessionCount from "../WordCount/DisplaySessionCount";
import SaveButton from "../WordCount/SaveButton";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import GetAppRounded from "@material-ui/icons/GetAppRounded";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class PopulateEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      show: false,
      entryBody: "",
      entryTitle: "",
      entryID: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadEntries();
  }

  countEntryWords = (entry) => {
    let entryBodyString = entry.entryBody;
    let arrayCount = [];
    arrayCount = entryBodyString.split(" ");
    let entryWords = arrayCount.length;
    return entryWords;
  };

  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  loadEntries = () => {
    apiEntry
      .findEntries(localStorage.getItem("id"))
      .then((entries) => {
        entries.data.map((entry) => {
          const wordCount = this.countEntryWords(entry);
          entry.entryWords = wordCount;
        });
        this.setState({
          entries: entries.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleEntryEdit = (event, id) => {
    event.preventDefault();

    apiEntry
      .findbyEntry_id(id)
      .then((res) => {
        console.log(res);
        this.setState({
          show: true,
          entryBody: res.data.entryBody,
          entryTitle: res.data.title,
          entryID: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditSave = (event) => {
    event.preventDefault();
    console.log(this.state);
    const updatedEntry = {
      title: this.state.entryTitle,
      entryBody: this.state.entryBody,
    };

    console.log(updatedEntry);
    apiEntry
      .updateEntry(this.state.entryID, updatedEntry)
      .then()
      .catch((err) => console.log(err));

    window.location.reload();
  };

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
  }

  deleteEntry = (event, id) => {
    event.preventDefault();

    apiEntry
      .deleteEntry(id)
      .then((res) => console.log("entry deleted"))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  downloadTxtFile = (id, title, date, words, text) => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        "Title: ",
        title,
        "\n",
        "\n",
        "Date Written: ",
        date,
        "\n",
        "\n",
        "Total Words: ",
        words,
        "\n",
        "\n",
        text,
      ],
      {
        type: "text/plain",
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = title + ".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  render() {
    const myWork = {
      textAlign: "left",
    };

    const entryReturn = {
      backgroundColor: "#a8e6cf",
      padding: ".5%",
    };

    const buttonDiv = {
      marginTop: "10px",
      marginBottom: "10px",
    };

    const buttonEdit = {
      "&:focus": {
        outline: "none",
      },
    };

    const buttonDownload = {
      color: "white",
      backgroundColor: "#88498f",
      "&:focus": {
        outline: "none",
      },
    };

    const buttonDelete = {
      color: "white",
      backgroundColor: "#ffaaa5",
      "&:focus": {
        outline: "none",
      },
    };

    const accordionStyle = {
      backgroundColor: "#dcedc1",
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

    const camo = {
      backgroundColor: "#a8e6cf",
    };

    return (
      <>
        <Container className="PopulateEntries">
          <CreateNewEntry />
          <div style={myWork}>
            {this.state.entries.map((entry) => {
              return (
                <>
                  <div style={entryReturn} key={entry._id}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={accordionStyle}
                      >
                        <div>
                          <h4>
                            <MenuBookIcon fontSize="large" />
                            &nbsp;
                            <strong>{entry.title}</strong>
                          </h4>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div>
                          <div style={buttonDiv}>
                            <Button
                              style={buttonEdit}
                              variant="contained"
                              color="secondary"
                              id={entry._id}
                              onClick={(event) => {
                                this.handleEntryEdit(event, entry._id);
                              }}
                            >
                              <CreateIcon />
                              &nbsp; Edit
                            </Button>{" "}
                            &nbsp; &nbsp;
                            <Button
                              variant="contained"
                              style={buttonDownload}
                              value={(entry.title, entry.entryBody)}
                              id={entry._id}
                              onClick={() =>
                                this.downloadTxtFile(
                                  entry._id,
                                  entry.title,
                                  entry.date.substring(
                                    0,
                                    entry.date.indexOf("T")
                                  ),
                                  entry.entryWords,
                                  entry.entryBody
                                )
                              }
                            >
                              <GetAppRounded />
                              &nbsp; Download
                            </Button>
                            &nbsp; &nbsp;
                            <Button
                              variant="contained"
                              style={buttonDelete}
                              id={entry._id}
                              onClick={(event) =>
                                this.deleteEntry(event, entry._id)
                              }
                            >
                              <HighlightOffIcon />
                              &nbsp; Delete
                            </Button>
                          </div>
                          <p>
                            <strong>Date Created:</strong>{" "}
                            {entry.date.substring(0, entry.date.indexOf("T"))}
                          </p>
                          <p>
                            <strong>Words:</strong> {entry.entryWords}
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </>
              );
            })}
          </div>
        </Container>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={() => {
            this.setState({ show: false });
          }}
        >
          <Modal.Header closeButton>
            <h1>Edit Entry</h1>
          </Modal.Header>

          <Modal.Body>
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
                        id="entryTitle"
                        value={this.state.entryTitle}
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
                  {/*                   <DisplaySessionCount
                    wordCount={this.countWords(this.state.entryBody)}
                  /> */}
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
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleEditSave}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PopulateEntries;
