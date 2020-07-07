import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";

class WritingStreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streakLength: 0,
    };
  }

  componentDidMount() {
    this.WritingStreak();
  }

  WritingStreak = () => {
    apiEntry
      .getStreak(localStorage.getItem("id"))
      .then((entries) => {
        console.log(entries.data, "streaks");
        console.log(entries.data.length, "streak");
        this.setState({
          streakLength: entries.data.length,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <p>Writing Streak : {this.state.streakLength}</p>
      </div>
    );
  }
}

export default WritingStreak;
