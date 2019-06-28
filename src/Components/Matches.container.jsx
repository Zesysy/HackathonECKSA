import React, { Component } from 'react';
import { Card, Row } from 'react-bootstrap';

import { connect } from 'react-redux';

import { fetchMatches } from '../Actions/matchesAction';
import MatchDual from './MatchDualComponent';
import Layout from '../Components/Layout/Layout';

import styles from './MatchDualComponent.module.css';

class MatchesContainer extends Component {
  componentDidMount() {
    this.props.fetchMatches();
  }
  render() {
    const { error, isLoading, data } = this.props;
    if (error) {
      return <Layout>Error! {error.message}</Layout>;
    } else if (isLoading) {
      return <Layout>Loading ...</Layout>;
    } else {
      return (
        <Layout>
          <Row>
            <Card bg="light" className="col-5 m-3">
              <Card.Body className={styles.titleColumn}>Domicile</Card.Body>
            </Card>
            <Card bg="light" className="col-5 m-3">
              <Card.Body className={styles.titleColumn}>Visiteur</Card.Body>
            </Card>
          </Row>
          <div>
            {data.map((result, index) => {
              return <MatchDual {...result} key={index} />;
            })}
          </div>
        </Layout>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchMatchesReducer.data,
    loading: state.fetchMatchesReducer.isLoading,
    error: state.fetchMatchesReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: () => {
      dispatch(fetchMatches());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchesContainer);
