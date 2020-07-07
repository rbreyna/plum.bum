import React from "react";
import "./Dashboard.css";
import { Container, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { WritingGoal } from "../components/WritingGoal/WritingGoal.js";
import WordCount from "../components/WordCount/WordCount";
import apiUser from "../utils/apiUser";
import GoalReached from "../components/WritingGoal/GoalReached.js";
import DashboardUI from "../components/DashboardUI";
import Grid from "@material-ui/core/Grid";

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

  const goalDiv = {
    marginBottom: "15px",
    textAlign: "center",
  };

  const headerStyles = {
    fontFamily: "Ribeye Marrow",
    marginTop: "20px",
    marginBottom: "30px",
  };

  return (
    <>
      <div>
        {!isLoading && user && (
          <>
            {userInfo(user.sub.split("|")[1])}
            <h1 style={headerStyles}>{user.name}'s Dashboard</h1>

            <Container>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Image
                      src={picture}
                      width={320}
                      height={320}
                      roundedCircle
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DashboardUI />
                  </Grid>
                </Grid>
              </div>
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
