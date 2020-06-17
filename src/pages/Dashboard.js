import React from "react";
import "./Dashboard.css";

import { Container, Col, Row, FormControl, InputGroup, Image } from "react-bootstrap"
import { useAuth0 } from '../contexts/auth0-context';

import {Button} from 'react-bootstrap';
import {WritingGoal} from '../components/WritingGoal';

function Dashboard() {

const { user } = useAuth0();
const [modalShow, setModalShow] = React.useState(false);


  return (
    <div>
      <h1> {user ? `${user.name}'s` : null } Dashboard Page</h1>

      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={4}>
            <Image src="./assets/images/profile-pic-placeholder.jpg" width={150} height={150} roundedCircle />
            <h6>Joe Smith</h6>
          </Col>
          <Col className="content dash2" sm={8}>
            <p>Daily Word Count:</p><br></br>
            <p>Weekly Word Count:</p><br></br>

            {/*function App() {
              const [modalShow, setModalShow] = React.useState(false);

            return (*/}
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
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <InputGroup>
              <br></br>
              <InputGroup id="passage-title" sm={12}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Name of Passage</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <br></br>
              </InputGroup>
              <FormControl id="passage" as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>


  )
}


export default Dashboard;
