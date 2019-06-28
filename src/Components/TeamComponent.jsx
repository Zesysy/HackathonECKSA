import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { fetchWilders } from '../Actions/wildersAction';

const capitalize = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class TestFetchComponent extends Component {
  componentDidMount() {
    this.props.fetchWilders();
  }

  render() {
    const { error, isLoading, data } = this.props;

    let filteredData = [...new Set(data.map((item) => item.campus))];

    if (error) {
      return <div>Error! {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div className="filterCampus">
          <p>Choisissez votre campus :</p>
          <DropdownButton
            variant="dark"
            id="dropdown-item-button"
            title="Dropdown button"
          >
            {filteredData.map((campus) => (
              <Dropdown.Item>{campus}</Dropdown.Item>
            ))}
          </DropdownButton>
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
)(TestFetchComponent);
