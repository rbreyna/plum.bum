import React, { Component } from 'react'
import apiEntry from "../../utils/apiEntry";
import "../../pages/Dashboard.css";

export default class DailyWordcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayliWordCount: 0,
    };
  }
  
  // Count Words
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };


  componentDidMount() {
    this.dailyWordCount()
  }

  //Sum
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }


  // Get daily word count
  dailyWordCount = () => {

    apiEntry
      .findEntriesbydate(localStorage.getItem("id"))
      .then(entries => {
        console.log(entries.data);
        let entriesbydate = []

        for (var i = 0; i < entries.data.length; i++) {
          entriesbydate.push(this.countWords(entries.data[i].entryBody))
          console.log("words", entriesbydate)
        }

        this.setState({
          dayliWordCount: this.getArraySum(entriesbydate),
        })

      }).catch((err) => console.log(err));
  }



  render() {
    return (
      <div>
        <p>Daily Word Count: {this.state.dayliWordCount}</p><br></br>
      </div >
    )
  }
}


//RZ need to add to get the word count ??  (idalmys suggestion)
// apiUser
//         .updateUser(user.sub.split("|")[1], {dailyWordCount: "name of her variable"})
//         .then()
//         .catch(err => { 
//           console.log(err)
//         })