import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Components/Menu";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function App() {    
  return (
    <div className="App">  
      <Container>
        <Menu />
        <h1 className="H1">Registration Form</h1>
        <Row>
          <Col>
            <LeftSide />
          </Col>
          <Col>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
