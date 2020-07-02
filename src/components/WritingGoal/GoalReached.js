import React, { Component } from "react";
import apiUser from "../../utils/apiUser";
import { Button, Modal } from "react-bootstrap";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalCount: 0,
      goalDate: "",
      wordCount: 0,
      startGoalDate: "",
      show: false,
    };
  }

  componentDidMount() {
    this.GetGoalInfo()
  }
  //Sum  Need total word count from the day the goal started to present day
  // need to store this count and keep adding to it

  // getArraySum = (a) => {
  //   var total = 0;
  //   for (var i in a) {
  //     total += a[i];
  //   }
  //   return total;
  // }

  GetGoalInfo = () => {
    countEntryWords = (entry) => {
      let entryBodyString = entry.entryBody;
      let arrayCount = [];
      arrayCount = entryBodyString.split(" ");
      let entryWords = arrayCount.length;
      return entryWords;
    };
    apiUser
      .getGoal(localStorage.getItem("email"))
      .then((goalInfo) => {
        //if goalInfo.startGoalDate === Date.now then start count of words)
        //save into datebase
        //call Function to save the word count into the database
        console.log(goalInfo.goalDate, "Date");
        console.log(goalInfo.goal, "goal");
        this.setState({
          goalCount: goalInfo.goal,
          goalDate: goalInfo.date,
        });
      })
      .catch((err) => console.log(err));
  };

  
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  
  
  render() {
    const userGoalDate = this.state.goalDate;
    const countWordsTodate = "";
    const goalWords = this.state.goalCount;

    return (

    <div>
      {/* <h1> Bootstrap Modal in React</h1>
      <Button onClick= {() =>{this.handleModal()}}>Goal Button</Button>*/}
      {userGoalDate === Date.now && countWordsTodate >= goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            Congrats! You have reached your goal!
          </Modal.Body>
        </Modal>
        </>

      )}
      {userGoalDate === Date.now && countWordsTodate < goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            You Have Run Out OF Time!
          </Modal.Body>
        </Modal>
        </>

      )}
      {userGoalDate !== Date.now && countWordsTodate >= goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            WOW!!! you have reached your goal before the date!
          </Modal.Body>
        </Modal>
        </>

      )}
      {Date.now  === Date.now && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            You Can Do It!!!! Reach your word goal. Keep on writing!
          </Modal.Body>
        </Modal>
        </>

      )}
 
      </div>
    );
  }
}
//this condition has to run everyday
/*   GoalCondition = () => {
    

    if (userGoalDate === Date.now && countWordsTodate >= goalWords) {
      alert("Congrats! You have reached your goal!");
      // reset goal()
    } else if (userGoalDate === Date.now && countWordsTodate < goalWords) {
      alert("You Have Run Out OF Time!");
      // reset goal()
    } else if (userGoalDate !== Date.now && countWordsTodate >= goalWords) {
      alert("WOW!!! you have reached your goal before the date!") ;
      // reset goal
    }else {
      alert("Reach your word goal! Keep on writing!");
    }
    //If none of the conditions are met then there will be no remarks
  }; */
//need an query to save this to the date base
//need to add date in the controller folder

//updateUser() need id
//words and the date

//show the information to the user
//funtion will be get user by id
// get: goal and date

//build statement by getting the user and the wordstodate (need to calculate the total words to date)compare with the the goal words count.
//compare the current date with the goal date

/* for loop from the date of the goal to the goaldate for the word count
countEntryWords = (entry) => {
  let entryBodyString = entry.entryBody;
  let arrayCount = [];
  arrayCount = entryBodyString.split(" ");
  let entryWords = arrayCount.length;
  return entryWords;
};*/
