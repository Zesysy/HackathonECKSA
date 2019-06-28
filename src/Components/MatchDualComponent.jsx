import React from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';

import styles from './MatchDualComponent.module.css';

const MatchDual = (props) => {
  if (props.winnerUid === props.homeTeam) {
    return (
      <Row>
        <Card bg="warning" text="white" className="col-5 offset-1 m-3">
          <Card.Body className={styles.campusName}>{props.homeTeam}</Card.Body>
        </Card>
        <Card className="col-5 offset-1 m-3">
          <Card.Body className={styles.campusName}>{props.awayTeam}</Card.Body>
        </Card>
      </Row>
    );
  } else {
    return (
      <Row>
        <Card className="col-5 offset-1 m-3">
          <Card.Body className={styles.campusName}>{props.homeTeam}</Card.Body>
        </Card>
        <Card bg="warning" text="white" className="col-5 offset-1 m-3">
          <Card.Body className={styles.campusName}>{props.awayTeam}</Card.Body>
        </Card>
      </Row>
    );
  }
};

export default MatchDual;
