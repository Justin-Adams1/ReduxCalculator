import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Buttons from './buttons';

function App() {
  const value = useSelector((state) => state.value.value);

  return (
    <Container>
      <Row>
        <Row>
          <h1>Redux React Calculator!</h1>
        </Row>
      </Row>
      <Row>
        <span>{value}</span>
      </Row>
      <Row>
        <Buttons />
      </Row>
    </Container>
  );
}

export default App;
