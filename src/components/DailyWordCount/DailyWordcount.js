import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import "../../pages/Dashboard.css";

export default class DailyWordcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyWordCount: 0,
    };
  }

  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  componentDidMount() {
    this.dailyWordCount();
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
  dailyWordCount = () => {
    apiEntry
      .findEntriesbydate(localStorage.getItem("id"))
      .then((entries) => {
        let entriesbydate = [];

        for (var i = 0; i < entries.data.length; i++) {
          entriesbydate.push(this.countWords(entries.data[i].entryBody));
          //console.log("words", entriesbydate);
        }

        this.setState({
          dailyWordCount: this.getArraySum(entriesbydate),
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <>{this.state.dailyWordCount}</>;
  }
}
