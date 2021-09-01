import React from 'react';
import styles from './Home.module.css';
import {Card, Button, Row} from 'react-bootstrap';
import logo from './bank.jpg';



const Home = () => (
  <Card style={{}}>
      <Card.Text style={{textAlign: "center"}}>
   Welcome to the worst bank in the world.
  </Card.Text>
   <Row style={{ justifyContent: 'center' }}>
  <Card.Img variant="top" src={logo} style={{ height: '700px', width: '1400px' }} />
  </Row>
 <Card.Body style= {{ }}>
</Card.Body> 
<Card.Footer>
  <Row style={{ justifyContent: 'center' }}>
  <Button style={{width: '200px', height: '50px'}} variant="primary"><a style={{color: 'white', textDecoration: 'none'}} href="#/CreateAccount/">Create Account</a></Button>
  </Row>
</Card.Footer>
</Card> 


  
);

export default Home;
