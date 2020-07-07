import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import CreateNewEntry from "./CreateNewEntry";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./PopulateEntries.css";

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

  render() {
    const myWorkHeader = {
      textAlign: "left",
      marginBottom: "3%",
    };

    const myWork = {
      textAlign: "left",
    };

    const entryReturn = {
      backgroundColor: "#f8f9fa",
      padding: "3%",
    };

    const buttonView = {
      color: "white",
      backgroundColor: "#88498f",
    };

    return (
      <Container className="PopulateEntries">
        <div style={myWorkHeader}>
          <h1>My Work</h1>
          <CreateNewEntry />
        </div>
        <div style={myWork}>
          {this.state.entries.map((entry) => {
            return (
              <>
                <div style={entryReturn} key={entry._id}>
                  {console.log(entry)}
                  <h3>{entry.title}</h3>
                  {/* This "Edit" button will allow the user to edit a particular chapter/entry */}
                  <Button variant="contained" color="secondary">
                    <CreateIcon />
                    &nbsp; Edit
                  </Button>{" "}
                  &nbsp;
                  <Button variant="contained" style={buttonView}>
                    <VisibilityIcon />
                    &nbsp; View
                  </Button>
                  <br></br>
                  <br></br>
                  <p>
                    <strong>Date Created:</strong>{" "}
                    {entry.date.substring(0, entry.date.indexOf("T"))}
                  </p>
                  <p>
                    <strong>Words:</strong> {entry.entryWords}
                  </p>
                </div>
                <div>
                  &nbsp;
                  <p>.............</p>
                  &nbsp;
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
