import axios from 'axios';

import { fetchIsLoading, fetchSuccess, fetchError } from './fetchActions';

export const RESSOURCE_NAME = 'wilders';

export const fetchWilders = () => {
  return async (dispatch) => {
    dispatch(fetchIsLoading(RESSOURCE_NAME));
    axios
      .get(
        'https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then((res) => {
        const datas = res.data;
        dispatch(fetchSuccess(RESSOURCE_NAME, datas));
        return datas;
      })
      .catch((error) => dispatch(fetchError(RESSOURCE_NAME, error)));
  };
};
