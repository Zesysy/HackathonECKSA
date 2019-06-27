import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchMatches } from '../Actions/matchesAction';
import MatchDual from './MatchDualComponent';

class MatchesContainer extends Component {
  componentDidMount() {
    this.props.fetchMatches();
  }
  render() {
    const { error, isLoading, data } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          {data.map((result, index) => {
            return <MatchDual {...result} key={index} />;
          })}
        </div>
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
