import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import "../../pages/Dashboard.css";

export default class highestWordCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MaxCountWord: 0,
    };
  }
  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  componentDidMount() {
    this.entriesCount();
  }

  //Sum
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  };

  // Get daily word count
  entriesCount = () => {
    apiEntry
      .findEntries(localStorage.getItem("id"))
      .then((entries) => {
        console.log(entries.data);
        let highestentries = [];

        console.log(entries.data.length, "length");
        for (var i = 0; i < entries.data.length; i++) {
          highestentries.push(this.countWords(entries.data[i].entryBody));

          console.log("Highestwords", highestentries);
        }

        if (highestentries.length > 0) {
          this.setState({
            MaxCountWord: Math.max(...highestentries),
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <>{this.state.MaxCountWord}</>;
  }
}
