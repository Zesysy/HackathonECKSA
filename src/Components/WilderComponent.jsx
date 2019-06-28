import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWilders } from '../Actions/wildersAction';

import './WilderComponent.css';

const capitalize = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class WilderComponent extends Component {
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
      return (
        <div>
          <>
            {data.map((item, index) => (
              <ul key={index}>
                <li>
                  {capitalize(item.lastname)} {capitalize(item.firstname)}
                </li>
              </ul>
            ))}
          </>
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
    fetchWilders: () => {
      dispatch(fetchWilders());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WilderComponent);
