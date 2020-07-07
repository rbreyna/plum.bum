import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { WritingGoal } from "../components/WritingGoal/WritingGoal.js";
import WordCount from "../components/WordCount/WordCount";
import DayliWordCount from "../components/DailyWordCount/DailyWordcount";
import WeeklyWordCount from "../components/WeeklyWordCount/weeklyWordCount";
import HighestWordCount from "../components/HighestWordCount/highestWordCount";
import WritingStreak from "../components/WritingStreak/WritingStreak";
import apiUser from "../utils/apiUser";
import GoalReached from "../components/WritingGoal/GoalReached.js";
import DashboardUI from "../components/DashboardUI";

function Dashboard() {
  const { isLoading, user } = useAuth0();
  const [modalShow, setModalShow] = React.useState(false);

  const picture = user ? user.picture : null;

  const userInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        console.log("User found!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const id = user ? user.sub.split("|")[1] : null;

  const goalDiv = {
    textAlign: "right",
  };

  return (
    <>
      <div>
        {!isLoading && user && (
          <>
            {userInfo(user.sub.split("|")[1])}
            <h1>{user.name}'s Dashboard</h1>
            <Container>
              <Image src={picture} width={150} height={150} roundedCircle />
              <DashboardUI />
              <div style={goalDiv}>
                <WritingGoal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <GoalReached
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>

              <WordCount />
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
