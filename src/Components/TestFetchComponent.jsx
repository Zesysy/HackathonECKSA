import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWilders } from '../Actions/wildersAction';

class TestFetchComponent extends Component {
  componentDidMount() {
    this.props.fetchWilders();
  }

  render() {
    const { error, isLoading, data } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading ...</div>;
    } else {
      return <div>{data.map((item) => item.firstname)}</div>;
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
    fetchWilders: () => {
      dispatch(fetchWilders());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestFetchComponent);
