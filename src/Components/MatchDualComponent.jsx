import React from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchCampuses } from '../Actions/campusesAction';

const MatchDual = (props) => {
  return (
    <Row>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Domicile</Card.Header>
        <ListGroup variant="flush">{props.homeTeam}</ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Visiteur</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.awayTeam}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.fetchReducer.data,
    loading: state.fetchReducer.isLoading,
    error: state.fetchReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchDual);
