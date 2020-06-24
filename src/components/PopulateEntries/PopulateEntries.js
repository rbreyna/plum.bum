import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import { Container, Button } from "react-bootstrap";
import "./PopulateEntries.css";

class PopulateEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      title: "",
      entryBody: "",
      date: "",
    };
  }

  componentDidMount() {
    this.loadEntries();
  }

  // SHAYDA NOTE: This loadEntries works, but only console.logs the data:
  loadEntries = () => {
    apiEntry
      .findAllEntries()
      .then((entries) => {
        console.log(entries.data);
        console.log(entries.data.length, "length");
        this.setState({
          entries: entries.data,
          title: "",
          entryBody: "",
          date: "",
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container className="PopulateEntries" fluid>
        <div>
          <h1>My Work</h1>
        </div>
        <div>
          {this.state.entries.map((entry) => {
            return (
              <div>
                <p key={entry._id}></p>
                <p>
                  {entry.title} &nbsp;
                  {/* This "Edit" button will allow the user to edit a particular chapter/entry */}
                  <Button>Edit</Button> &nbsp;
                  <Button>View</Button>
                </p>
                {/* <p>{entry.entryBody}</p> */}
                <p>Date Created: {entry.date}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default PopulateEntries;
