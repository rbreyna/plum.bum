import React from "react";
import "./Dashboard.css";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { WritingGoal } from "../components/WritingGoal/WritingGoal.js";
import WordCount from "../components/WordCount/WordCount";
import DayliWordCount from "../components/DailyWordCount/DailyWordcount";
import WeeklyWordCount from "../components/WeeklyWordCount/weeklyWordCount";
import HighestWordCount from "../components/HighestWordCount/highestWordCount";
import WritingStreak from "../components/WritingStreak/WritingStreak";
import apiUser from "../utils/apiUser";

function Dashboard() {
  const { isLoading, user } = useAuth0();
  const [modalShow, setModalShow] = React.useState(false);

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

  return (
    <>
      <div>
        {!isLoading && user && (
          <>
            {userInfo(user.sub.split("|")[1])}
            <h1> {user.name}'s Dashboard Page</h1>
            <Container>
              <Row className="justify-center-content fluid" id="row-1">
                <Col className="content dash1" sm={4}>
                  <Image
                    src="./assets/images/profile-pic-placeholder.jpg"
                    width={150}
                    height={150}
                    style={{ marginTop: "20px" }}
                    roundedCircle
                  />
                </Col>
                <Col className="content dash2" sm={6}>
                  <DayliWordCount />
                  <WritingStreak />
                  <HighestWordCount />
                  <WeeklyWordCount />
                </Col>
                <Col sm={2}>
                  <WritingGoal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
              </Row>
              <WordCount />
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
