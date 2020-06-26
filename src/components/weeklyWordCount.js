import React, { Component } from 'react'
import apiEntry from "../utils/apiEntry";
import "../pages/Dashboard.css";

export default class DailyWordcount extends Component {
  constructor(props) {
    super(props);
    this.state = {

      weeklyWordcount: 0
    };
  }
  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };


  componentDidMount() {
    this.weeklyWordCount()
  }

  //Sum
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }
// word count last 7 days
  weeklyWordCount = () => {
    
    apiEntry
      .findEntriesbyweek()
      .then(entries => {
        console.log(entries.data);
        let entriesbydate = []
     
        console.log(entries.data.length, "length");
        for (var i = 0; i < entries.data.length; i++) {

          entriesbydate.push(this.countWords(entries.data[i].entryBody))

          console.log("weeks", entriesbydate)
          
        }

        this.setState({
          weeklyWordcount: this.getArraySum(entriesbydate)
        })

      }).catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Weekly Word Count: {this.state.weeklyWordcount}</p><br></br>
      </div >
    )
  }
}
