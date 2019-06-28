import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../Actions/campusesAction';
import { Container } from 'react-bootstrap';

class LeaderbordComponentView extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const { error, isLoading, data } = this.props;
    if (error) {
      return <div>Error ! {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <h1>Classement</h1>
          <ol>
            {data.map((result, index) => {
              return (
                <li {...result} key={index}>
                  {result.name}
                </li>
              );
            })}
          </ol>
        </Container>
      );
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    data: state.fetchReducer.data,
    isLoading: state.fetchReducer.isLoading,
    error: state.fetchReducer.error,
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
