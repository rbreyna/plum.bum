import React from "react";
import "./Dashboard.css";
import {
  Button,
  Container,
  Col,
  Row,
  FormControl,
  InputGroup,
  Image,
} from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { WritingGoal } from "../components/WritingGoal";
import WordCount from "../components/WordCount";
import DayliWordCount from "../components/DailyWordcount";
import WeeklyWordCount from "../components/weeklyWordCount";

function Dashboard() {
  const { user } = useAuth0();

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <h1> {user ? `${user.name}'s` : null} Dashboard Page</h1>

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

          <Col className="content dash2" sm={8}>
            <DayliWordCount />
            <WeeklyWordCount />
            {/* Rahida : added this to pop a modal when Writing goal is clicked*/}
            <>
              <Button onClick={() => setModalShow(true)}>
                <p>Writing Goal:</p>
              </Button>

              <WritingGoal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </Col>
        </Row>
        <WordCount />
      </Container>
    </div>
  );
}

export default Dashboard;
