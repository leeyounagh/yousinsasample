import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MainCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/e7/88/12/e78812406ffcdff8c386b9bee8ca3478.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainCard;
