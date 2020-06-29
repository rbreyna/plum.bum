import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";

class WritingStreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streakLenght: 0,

    };
  }

  componentDidMount() {
    this.WritingStreak()
}


  WritingStreak = () => {

    apiEntry
      .getStreak()
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
  }
}

export default WritingStreak;
