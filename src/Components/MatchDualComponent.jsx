import React from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchCampuses } from '../Actions/campusesAction';

class MatchDual extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }
  render() {
    const { error, isLoading, data } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Domicile</Card.Header>
            <ListGroup variant="flush">
              {data.map((result, index) => (
                <div>
                  {' '}
                  {result.uid === this.props.homeTeam ? (
                    <ListGroup.Item key={index}>{result.name}</ListGroup.Item>
                  ) : null}
                </div>
              ))}
            </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Visiteur</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {data.map((item, index) => item.name)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      );
    }
  }
}

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
