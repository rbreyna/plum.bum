import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import CreateNewEntry from "./CreateNewEntry";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
    };
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
    var currentEntry = this.state.entries;
    console.log(currentEntry);
    // window.location.href = "/dashboard?id=" + currentEntry.id;
  };

  downloadTxtFile = (id, title, words, text) => {
    const element = document.createElement("a");
    const file = new Blob(
      ["Title: ", title, "\n", "\n", "Total Words: ", words, "\n", "\n", text],
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

    return (
      <Container className="PopulateEntries">
        <CreateNewEntry />
        <div style={myWork}>
          {this.state.entries.map((entry) => {
            return (
              <>
                <div style={entryReturn} key={entry._id}>
                  {/* {console.log(entry)} */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={accordionStyle}
                    >
                      <Typography>
                        <h4>
                          <MenuBookIcon fontSize="large" />
                          &nbsp;
                          <strong>{entry.title}</strong>
                        </h4>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div style={buttonDiv}>
                          <Button
                            style={buttonEdit}
                            variant="contained"
                            color="secondary"
                            onClick={this.handleEntryEdit}
                            id={entry._id}
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
                            // value={(entry.title, entry.entryBody)}
                            // id={entry._id}
                          >
                            <HighlightOffIcon />
                          </Button>
                        </div>

                        <p>
                          <strong>Date Created:</strong>{" "}
                          {entry.date.substring(0, entry.date.indexOf("T"))}
                        </p>
                        <p>
                          <strong>Words:</strong> {entry.entryWords}
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default PopulateEntries;
