import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import apiUser from "../../utils/apiUser";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWords: 0,
      goal: 0,
      goalDate: "",
      startGoalDate: "",
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
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
        console.log(" totalwords - 1 ", this.state.totalWords);
        console.log(" Goal - 1", this.state.goal);
        console.log(" GoalDate - 1", this.state.goalDate);
        console.log(" StartGoalDate - 1", this.state.startGoalDate);
      } else {
        this.setState({ message: "No data Found" });
      }
    });
  };

  goalUpdateModal = () => {
    let goalsDate = new Date(this.state.goalDate);
    console.log("goalsDate", goalsDate);
    let goalDate = goalsDate.toISOString().split("T")[0];
    let todaysDate = new Date().toISOString().split("T")[0];
    console.log("goalDate", goalDate);
    console.log("todaysDate", todaysDate);
    console.log("totalWords", this.state.totalWords);
    console.log("goal", this.state.goal);

    if (goalDate === todaysDate && this.state.totalWords >= this.state.goal) {
      this.setState({ showModal1: true });
    } else if (
      goalDate === todaysDate &&
      this.state.totalWords < this.state.goal
    ) {
      this.setState({ showModal2: true });
    } else if (
      goalDate !== todaysDate &&
      this.state.totalWords >= this.state.goal
    ) {
      this.setState({ showModal3: true });
    } else {
      this.setState({ showModal4: true });
    }
  };

  render() {
    const checkProgressBtn = {
      margin: "10px",
    };

    const modalStyle = {
      backgroundColor: "#ffd3b6",
      fontFamily: "Ribeye Marrow",
      fontSize: "1.25rem",
    };

    const modalHeaderStyle = {
      fontFamily: "Ribeye Marrow",
      fontSize: "2rem",
    };

    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          style={checkProgressBtn}
          onClick={this.goalUpdateModal}
        >
          <AlarmOnIcon />
          &nbsp; Check Goal Progress
        </Button>

        <Modal
          show={this.state.showModal1}
          onHide={() => {
            this.setState({ showModal1: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            {" "}
            AWESOME!!{" "}
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            Congrats! You've reached your goal! You can set a new goal at any
            time.
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal2}
          onHide={() => {
            this.setState({ showModal2: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            Don't Be Discouraged
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            O You Can Do It!!! Reset your Goal!
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal3}
          onHide={() => {
            this.setState({ showModal3: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            Your Head Of Your Game!!!!
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            WOW!!! you have reached your goal before the goal date!
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal4}
          onHide={() => {
            this.setState({ showModal4: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            Keep On Writing....
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            You still have 'TIME' to reach your goal! Words written so far:{" "}
            {this.state.totalWords}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
