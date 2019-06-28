import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../Actions/campusesAction';
import Layout from '../Components/Layout/Layout';
import Loading from './Loading';

class LeaderbordComponentView extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  capitalize = () => {};

  render() {
    const { error, isLoading, data } = this.props;

    const capitalize = (str) => {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };
    let filterManager = [
      ...new Set(
        data.map(
          (item) =>
            ` ${capitalize(
              item.manager.firstname,
            )}  ${item.manager.lastname.toUpperCase()}`,
        ),
      ),
    ];
    if (error) {
      return <div>Error ! {error.message}</div>;
    } else if (isLoading) {
      return <Loading />;
    } else {
      return (
        <Layout>
          <h1>Classement</h1>
          <ol>
            {data.map((result, index) => {
              return (
                <li {...result} key={index}>
                  {result.name}, Manager: {filterManager[index]}
                </li>
              );
            })}
          </ol>
        </Layout>
      );
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    data: state.fetchCampusesReducer.data,
    isLoading: state.fetchCampusesReducer.isLoading,
    error: state.fetchCampusesReducer.error,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(LeaderbordComponentView);
