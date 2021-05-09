//import logo from './logo.svg';  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Button,Col,Row,Figure} from 'react-bootstrap';
import Menu from './Components/menu'



function App() {
  return (
    <div className="App">
     <Menu/>
     <h1 className="H1">Registration Form</h1>
<Container>
  <Form>
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
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>
    <Col sm>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>USA</option>
        <option>Tunisia</option>
        <option>France</option>
      </Form.Control>
    </Form.Group>
    </Col>
    <Col sm>
    <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Enter Your CV" />
    </Form.Group>
    </Col>
  </Row>
  <Row>
  <Col sm></Col>
  <Col sm>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Confirm your informations"/>
  </Form.Group>
  </Col>
  <Col sm></Col>
  </Row>
  <Row>
  <Col sm></Col>
  <Col sm>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Col>
  <Col sm></Col>
  </Row>
  </Form>
  <Row>
  <Col sm></Col>
  <Col sm></Col>
  <Col sm>
  <Figure>
  <Figure.Image
    width={180}
    height={200}
    alt="180x200"
    src="./job-interview-conversation_74855-7566.jpg"
  />
  <Figure.Caption>
   Your informations will be transmitted to our company.
  </Figure.Caption>
  </Figure>
  </Col>
  </Row>
  </Container>
  </div>
  );
}

export default App;
