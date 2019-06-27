import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchMatches } from '../Actions/matchesAction';
import MatchDual from './MatchDualComponent';
import Layout from './Layout';
import { Container } from 'react-bootstrap';

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
        <Container>
          {data.map((result, index) => {
            return <MatchDual {...result} key={index} />;
          })}
        </Container>
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
    fetchMatches: () => {
      dispatch(fetchMatches());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchesContainer);
