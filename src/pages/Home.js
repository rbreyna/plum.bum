import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Home() {
  return (
    <div>
      <Jumbotron fluid className="welcome-tron">
        <img
          className="welcome-img"
          src="/assets/images/plumbum-blue.png"
          alt="plumbum"
        />
        <div className="welcome-header">
          <h1>Welcome.</h1>
          <p style={{ fontWeight: "bold" }}>Now start writing.</p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Home;
