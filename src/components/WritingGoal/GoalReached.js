import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import apiUser from "../../utils/apiUser";
import Button from "@material-ui/core/Button";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWords: 18,
      goal: 1000,
      goalDate: "2020-07-06T00:00:00.000Z",
      startGoalDate: "2020-07-06T00:00:00.000Z",
      show: false,
    };
  }

  componentDidMount() {
    this.GetGoalInfo();
  }

  // Count Words by entries
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  //Allow calculate Total
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  };

  //When user reach the goal reset values into the database
  ResetGoalData = () => {
    const userGoal = {
      goal: 0,
      goalDate: "",
      startGoalDate: "",
    };
    apiUser.updateUser(localStorage.getItem("id"), userGoal).then((User) => {
      console.log(User);
    });
  };

  //Get entries from the database  between startgoalDate date and goalDate (When user save data from writing goal that function
  //must calclate total words using that info)
  //Take a look to console(inspect the app) of that way you can understand the mongodb result

  GetGoalInfo = () => {
    apiUser
      .findUser(localStorage.getItem("id"))

      .then((UserGoal) => {
        this.setState({
          goal: UserGoal.data.goal,
          goalDate: UserGoal.data.goalDate,
          startGoalDate: UserGoal.data.startGoalDate,
        });
      });

    apiEntry.getgoaldata(localStorage.getItem("id")).then((entries) => {
      console.log(entries.data, "goal");
      let entriesbydate = [];
      if (entries.data.length > 0) {
        for (var i = 0; i < entries.data.length; i++) {
          entriesbydate.push(this.countWords(entries.data[i].entryBody));
          console.log("words", entriesbydate);
        }

        //Calculate Total words betwen startGoalDate and GoalDate
        //With that value you can compare the goal
        this.setState({
          totalWords: this.getArraySum(entriesbydate),
        });
        console.log(" totalwords ", this.state.totalWords);
        console.log(" Goal ", this.state.goal);
        console.log(" GoalDate ", this.state.goalDate);
        console.log(" StartGoalDate ", this.state.startGoalDate);
      } else {
        this.setState({ message: "No data Found" });
      }
    });
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  goalUpdateModal = () => {
    let goalDate = Date.parse(this.state.goalDate);
    if (goalDate === Date.now() && this.state.totalWords >= this.state.goal) {
      return (
        // <Modal show={this.state.show} onHide={() => this.handleModal()}>
        //   <Modal.Header closeButton>{/* GOAL: */}</Modal.Header>
        //   <Modal.Body>
        //     Congrats! You have reached your goal! Click Writing Goal To Set a
        //     New Goal.
        //   </Modal.Body>
        // </Modal>
        alert(
          "Congrats! You have reached your goal! You can keep writing or set a new goal."
        )
      );
    } else if (
      goalDate === Date.now() &&
      this.state.totalWords < this.state.goal
    ) {
      // console.log(this.state.totalWords)
      // console.log(this.state.goal)
      return (
        // <Modal show={this.state.show} onHide={() => this.handleModal()}>
        //   <Modal.Header closeButton>{/* GOAL: */}</Modal.Header>
        //   <Modal.Body>Reset your Goal!</Modal.Body>
        // </Modal>
        alert("O You Can Do It!!!  Reset Your Goal")
      );
    } else if (
      goalDate !== Date.now() &&
      this.state.totalWords >= this.state.goal
    ) {
      console.log("reached goal");
      console.log(this.state.totalWords);
      console.log(this.state.goal);
      return (
        // <Modal show={this.state.show} onHide={() => this.handleModal()}>
        //   <Modal.Header closeButton>{/* GOAL: */}</Modal.Header>
        //   <Modal.Body>
        //     WOW!!! you have reached your goal before the goal date!
        //   </Modal.Body>
        // </Modal>
        alert("WOW!!! you have reached your goal before the goal date!")
      );
    } else {
      console.log("reached here");
    }
  };
  render() {
    const checkProgressBtn = {
      margin: "10px",
    };

    return (
      <Button
        variant="contained"
        color="secondary"
        style={checkProgressBtn}
        onClick={this.goalUpdateModal}
      >
        <AlarmOnIcon />
        &nbsp; Check Goal Progress
      </Button>
    );
  }
}
