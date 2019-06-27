import axios from 'axios';
import { fetchIsLoading, fetchSuccess, fetchError } from './fetchActions';

export const fetchMatches = () => {
  return async (dispatch) => {
    dispatch(fetchIsLoading());
    axios
      .get(
        'https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then((res) => {
        const datas = res.data;
        dispatch(fetchSuccess(datas));
        return datas;
      })
      .catch((error) => dispatch(fetchError(error)));
  };
};
