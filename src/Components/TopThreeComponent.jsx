import React from 'react';
import { Card } from 'react-bootstrap';

const TopThreeComponent = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>TOP 3</Card.Title>
          {/* TODO : create a map function to get the three better of the leaderboard */}
          <Card.Text>Wild Code School de Biarritz : THE WINNER!!!!!</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TopThreeComponent;
