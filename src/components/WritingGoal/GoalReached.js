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
      showModal5: false,
    };
  }

  componentDidMount() {
    this.GetGoalInfo();
  }

  // Count Words by entries
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  //Calculate Total words
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  };

  //When user reachs their goal then reset the values
  ResetGoalData = () => {
    const userGoal = {
      goal: 0,
      goalDate: Date.now(),
      startGoalDate: Date.now(),
    };
    apiUser.updateUser(localStorage.getItem("id"), userGoal).then((User) => {
      console.log(User);
    });
  };

  //To calculate total words Get entries from the database  between startgoalDate date and goalDate
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
      let entriesbydate = [];
      if (entries.data.length > 0) {
        for (var i = 0; i < entries.data.length; i++) {
          entriesbydate.push(this.countWords(entries.data[i].entryBody));
          console.log("words", entriesbydate);
        }
        this.setState({
          totalWords: this.getArraySum(entriesbydate),
        });
      } else {
        this.setState({ message: "No data Found" });
      }
    });
  };

  goalUpdateModal = () => {
    let goalsDate = new Date(this.state.goalDate);
    let goalDate = goalsDate.toISOString().split("T")[0];
    let todaysDate = new Date().toISOString().split("T")[0];

    if (
      this.state.goal !== 0 &&
      goalDate === todaysDate &&
      this.state.totalWords >= this.state.goal
    ) {
      this.setState({ showModal1: true });
      this.ResetGoalData();
    } else if (
      this.state.goal !== 0 &&
      goalDate === todaysDate &&
      this.state.totalWords < this.state.goal
    ) {
      this.setState({ showModal2: true });
      this.ResetGoalData();
    } else if (
      this.state.goal !== 0 &&
      goalDate !== todaysDate &&
      this.state.totalWords >= this.state.goal
    ) {
      this.setState({ showModal3: true });
      this.ResetGoalData();
    } else if (this.state.goal === 0) {
      this.setState({ showModal4: true });
    } else {
      this.setState({ showModal5: true });
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
            Congrats! You've reached your goal! <br /> You can set a new goal at
            any time.
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
            You can do it!! Reset your goal and keep writing.
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal3}
          onHide={() => {
            this.setState({ showModal3: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            You're Ahead Of Your Game!!!!
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            WOW!!! You've reached your goal early! Celebrate! <br />
            You can also set a new goal at any time.
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal4}
          onHide={() => {
            this.setState({ showModal4: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            Uh-oh!!
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            You have to create a goal before <br />
            checking your goal progress!
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showModal5}
          onHide={() => {
            this.setState({ showModal5: false });
          }}
        >
          <Modal.Header style={modalHeaderStyle} closeButton>
            Keep On Writing....
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            You still have time to reach your goal! <br />
            You've written <strong>{this.state.totalWords}</strong> words so
            far; <br /> only{" "}
            <strong>{this.state.goal - this.state.totalWords}</strong> words
            left!
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
