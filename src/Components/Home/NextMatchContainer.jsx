import React from 'react';
import NextOneMatch from './NextMatches';

import { connect } from 'react-redux';

import { fetchMatches } from '../../Actions/matchesAction';
import Layout from '../Layout/Layout';
import { Container } from 'react-bootstrap';

class NextMatchContainer extends React.Component {
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
          {data
            .filter(
              (nextMatch, index) => typeof nextMatch.winnerUid !== 'string',
            )
            .map((result, index) => {
              return <NextOneMatch {...result} key={index} />;
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
)(NextMatchContainer);
