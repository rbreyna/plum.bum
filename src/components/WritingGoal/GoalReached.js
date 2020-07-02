import React, { Component } from "react";
import apiUser from "../../utils/apiUser";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalCount: 0,
      goalDate: "",
      wordCount: 0,
    };
  }

  GoalReached = () => {
    apiUser
      .getGoal(localStorage.getItem("id"))
      .then((goalInfo) => {
        console.log(goalInfo.goalDate, "Date");
        console.log(goalInfo.goal, "goal");
        this.setState({
          goalCount: goalInfo.goal,
          goalDate: goalInfo.date,
        });
      })
      .catch((err) => console.log(err));
  };

  GoalCondition = () => {
    const userGoalDate = goalDate;
    const countWordsTodate = "";
    const goalWords = goalCount;

    if (userGoalDate === Date.now && countWordsTodate >= goalWords) {
      return <p>Congrats! You have reached your goal!</p>;
      // reset goal()
    } else if (userGoalDate === Date.now && countWordsTodate < goalWords) {
      return <p>You have not reached your word goal! Keep on writing!</p>;
      // reset goal()
    } else if (userGoalDate !== Date.now && countWordsTodate >= goalWords) {
      return <p>WOW!!! you have reached your goal before the date!</p>;
      // reset goal
    }
  };
  render() {
    return (
      <div>
        <p>GoalCondition: {this.state.weeklycount}</p>
        <br></br>
      </div>
    );
  }
}

//need an query to save this to the date base
//need to add date in the controller folder

//updateUser() need id
//words and the date

//show the information to the user
//funtion will be get user by id
// get: goal and date

//build statement by getting the user and the wordstodate (need to calculate the total words to date)compare with the the goal words count.
//compare the current date with the gaol date

/* for loop from the date of the goal to the goaldate
countEntryWords = (entry) => {
  let entryBodyString = entry.entryBody;
  let arrayCount = [];
  arrayCount = entryBodyString.split(" ");
  let entryWords = arrayCount.length;
  return entryWords;
};*/
