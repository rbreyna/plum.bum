import React, { Component } from "react";
<<<<<<< HEAD
import Moment from "react-moment";
=======
import apiEntry from "../../utils/apiEntry";
>>>>>>> 34395995671094ab56df8f72be9eb1aef7723650

class WritingStreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      currentStreak: 0,
      longestStreak: 0,
    };
  }

  // Need a way to capture dates written
  // - Use timestamp to capture last "save" in dashboard
  // - If save < 24 hours ago, streak continues
  // - If save timestamp exceeds 24 hours, streak resets

  // Need to compare current streak and highest streak:
  // - if currentStreak > longestStreak, currentStreak = longestStreak and currentStreak resets

  render() {
    return (
      <>
        {/* This will be the first save in a string of saves that did not exceed twenty-four hours between them (i.e., all in the same "longestStreak") */}
        <Moment fromNow>2020-06-26T012:50-0500</Moment>
      </>
    );
=======
      streakLenght: 0,
      email :"",
    };
  }

  componentDidMount() {
    this.WritingStreak()
    this.setState({
      email:localStorage.getItem("email")
    })
    
    
}


  WritingStreak = () => {
    apiEntry
      .getStreak(localStorage.getItem("email"))
      .then(entries => {
        console.log(entries.data, "streaks");
        console.log(entries.data.length, "streak");
        this.setState({
          streakLenght: entries.data.length
        })

      }).catch((err) => console.log(err));
  }
  render() {
    return <div>
      <p>Writing Streak : {this.state.streakLenght}</p>
    </div >
>>>>>>> 34395995671094ab56df8f72be9eb1aef7723650
  }
}

export default WritingStreak;

