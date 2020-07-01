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

function Dashboard() {
  const { user } = useAuth0();

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <h1> {user ? `${user.name}'s` : null} Dashboard</h1>
      <Container className="Dashboard-header">
        <Row>
          <Col md={3}>
            <Image
              src="./assets/images/profile-pic-placeholder.jpg"
              width={150}
              height={150}
              style={{ marginTop: "20px" }}
              roundedCircle
            />
          </Col>
          <Col md={4}>
            <DayliWordCount />
            <WritingStreak />
          </Col>
          <Col md={4}>
            <HighestWordCount />
            <WeeklyWordCount />
          </Col>
          <Col sm={2}>
            {/* Rahida : added this to pop a modal when Writing goal is clicked*/}
            <>
              <WritingGoal />
            </>
          </Col>
        </Row>

        <WordCount />
      </Container>
    </div>
  );
}

export default Dashboard;
