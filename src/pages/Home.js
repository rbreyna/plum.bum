import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import PencilButton from "../components/PencilButton/PencilButton.js";
import "./Home.css";

function Home() {
  return (
    <div>
      <Jumbotron fluid className="Home-tron">
        <img
          className="Home-welcome-img"
          src="/assets/images/plumbum-blue.png"
          alt="plumbum logo"
        />
        <div className="Home-definition">
          <p style={{ fontSize: "14px" }}>
            <em>
              plumbum: noun; new latin. <strong>pencil.</strong>
            </em>
            <br></br>
          </p>
        </div>
        <div className="Home-header">
          <h2>Welcome.</h2>
          <p style={{ fontWeight: "bold" }}>Now start writing.</p>
        </div>
        <div className="Writing-button">
          <a href="/dashboard">
            <PencilButton src="/assets/images/pencil.png" alt="dashboard" />
          </a>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Home;
