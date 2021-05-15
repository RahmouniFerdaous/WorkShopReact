import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const LeftSide = () => {
  return (
    <div>
      <br />
      <br />
      <Form style={{ width: "85%", marginLeft: "10%" }}>
        <Row>
          <Col>
            <Form.Group controlId="formGroupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>USA</option>
                <option>Tunisia</option>
                <option>France</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Row>
            <Col sm>
              <Form.Label>Enter Your CV</Form.Label>
            </Col>
            <Col sm></Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" />
              </Form.Group>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Confirm your informations" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LeftSide;
