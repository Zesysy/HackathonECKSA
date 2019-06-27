import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTest } from '../Actions/fetchActions';

class TestFetchComponent extends Component {
  componentDidMount() {
    this.props.fetchTest();
  }

  render() {
    const { error, loading, data } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    } else if (loading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          <h1>HELLO WORLD</h1>

          {data.map((item) => item.name)}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchReducer.data,
    loading: state.fetchReducer.loading,
    error: state.fetchReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTest: () => {
      dispatch(fetchTest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestFetchComponent);
