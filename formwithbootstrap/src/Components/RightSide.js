import React from "react";
import { Figure } from "react-bootstrap";

const RightSide = () => {
  return (
    <div>
      <br />
      <br />
      <Figure>
        <Figure.Image
          width={400}
          height={500}
          alt="180x200"
          src="./job-interview-conversation_74855-7566.jpg"
        />
        <Figure.Caption>
          Your informations will be transmitted to our Company.
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default RightSide;
