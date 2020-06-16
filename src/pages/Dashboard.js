import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import UserStats from "../components/UserStats";

function Dashboard() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Dashboard Page</h1>
        </Jumbotron>
        <br></br>
        <UserStats />
        <textarea placeholder="Start writing . . ."></textarea>
      </Container>
    </div>
  );
}

export default Dashboard;
