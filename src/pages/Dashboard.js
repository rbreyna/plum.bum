import React from "react";
import { Container } from "react-bootstrap";
import UserStats from "../components/UserStats";

function Dashboard() {
  return (
    <div>
      <Container>
        <h1>Dashboard</h1>
        <br></br>
        <UserStats />
        <textarea placeholder="Start writing . . ."></textarea>
      </Container>
    </div>
  );
}

export default Dashboard;
