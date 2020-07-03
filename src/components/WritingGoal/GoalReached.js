import React, { Component } from "react";
import apiUser from "../../utils/apiUser";
import { Modal } from "react-bootstrap";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalCount: 0,
      goalDate: "",
      wordCount: 0,
      startGoalDate: "",
      show: true,
    };
  }

  // handleChange(event) {
  //   const value = event.target.value;
  //   this.setState({ [event.target.id]: value });
  //   console.log("goal", value);
  //   apiUser.saveUserGoal({
  //     wordGoal: this.state.wordGoal,
  //     dateSetGoal: this.state.dateSetGoal,
  //     todaysDate: this.state.todaysDate,
  //   })
  // }

  GetGoalInfo = () => {
    
    apiUser
      .findUser(localStorage.getItem("id"))
      .then((userInfo) => {
        console.log(userInfo.goalDate);
        console.log(userInfo.goal);
        console.log(userInfo.startGoalDate);
        console.log(userInfo.dailyWordCount);
        this.setState({
          goalCount: userInfo.goal,
          goalDate: userInfo.date,
          wordCount: userInfo.dailyWordCount,
          startGoalDate: userInfo.startGoalDate,
        });
      })
      .catch((err) => console.log(err));
  };
//if userInfo.startGoalDate === Date.now then start count of words)
        //save into datebase
        //call Function to save the word count into the database
  
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  
  
  render() {
    const userGoalDate = this.state.goalDate;
    const countWordsTodate = this.state.wordCount;
    const goalWords = this.state.goalCount;
    const startDate = this.state.startGoalDate;

    return (

    <div>
      {userGoalDate === Date.now && countWordsTodate >= goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            Congrats! You have reached your goal!
            Click Writing Goal To Set a New Goal.
          </Modal.Body>
        </Modal>
        </>

      )}
      {/* {userGoalDate === Date.now && countWordsTodate < goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            Reset your Goal!
          </Modal.Body>
        </Modal>
        </>

      )} */}
      {/* {userGoalDate !== Date.now && countWordsTodate >= goalWords &&  (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            WOW!!! you have reached your goal before the date!
          </Modal.Body>
        </Modal>
        </> */}

      )}
      </div>
    );
  }
}

