import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const MatchDual = (props) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Domicile</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.homeTeam}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Visiteur</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.awayTeam}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default MatchDual;
