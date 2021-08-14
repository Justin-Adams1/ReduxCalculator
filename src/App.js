import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Buttons from './buttons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const value = useSelector((state) => state.value.value);
  const entry = useSelector((state) => state.value.entry);

  return (
    <Container>

      <Col className="main">

        <Row className="valueBox">
          <h4>{entry}</h4>   
          <h1>{value}</h1>  
        </Row>
   
        <Row>
          <Buttons />
        </Row>

      </Col>

    </Container>
  );
}

export default App;
