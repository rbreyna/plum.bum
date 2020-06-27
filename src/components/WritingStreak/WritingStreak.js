import React, { Component } from "react";
import Moment from "react-moment";

class WritingStreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
}

export default WritingStreak;
