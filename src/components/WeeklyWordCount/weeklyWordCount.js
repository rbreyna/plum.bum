import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import "../../pages/Dashboard.css";

export default class WeeklyWordcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth0_id: "",
      weeklycount: 0,
    };
  }
  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  componentDidMount() {
    this.weeklyCount();
  }

  //Sum
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  };
  // word count last 7 days
  weeklyCount = () => {
    apiEntry
      .findEntriesbyweek(localStorage.getItem("id"))
      .then((entries) => {
        //console.log(entries.data);
        let entriesbydate = [];

        //console.log(entries.data.length, "length");
        for (var i = 0; i < entries.data.length; i++) {
          entriesbydate.push(this.countWords(entries.data[i].entryBody));

          //console.log("weeks", entriesbydate);
        }

        this.setState({
          weeklycount: this.getArraySum(entriesbydate),
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <>{this.state.weeklycount}</>;
  }
}
