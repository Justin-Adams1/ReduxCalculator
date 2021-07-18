import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  subtract,
  add,
  multiply,
  divide,
  root,
  clear,
} from "./reducers/valuesSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";

const Buttons = () => {
  const value = useSelector((state) => state.value.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={() => dispatch(add())}>Add</Button>
          <Button onClick={() => dispatch(subtract())}>Subtract</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => dispatch(multiply(2))}>Multiply by 2</Button>
          <Button onClick={() => dispatch(divide(2))}>Divide by 2</Button>
          <Button onClick={() => dispatch(multiply(value))}>Square</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => dispatch(root())}>root</Button>
          <Button onClick={() => dispatch(clear())}>clear</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Buttons;
