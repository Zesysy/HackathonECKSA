import React from 'react';
import { Card } from 'react-bootstrap';

const NextOneMatch = (props) => {
  return (
    <Card>
      <Card.Title>Le {props.isoDate}</Card.Title>
      <Card.Body>
        {props.homeTeam} vs {props.awayTeam}
      </Card.Body>
    </Card>
  );
};

export default NextOneMatch;
