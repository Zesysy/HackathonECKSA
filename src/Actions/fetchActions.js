export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_LOADING_SUCCESS = 'FETCH_LOADING_SUCCESS';
export const FETCH_LOADING_FAILURE = 'FETCH_LOADING_FAILURE';

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchLoadingSuccess = (data) => ({
  type: FETCH_LOADING_SUCCESS,
  payload: data,
});

export const fetchLoadingFailure = (error) => ({
  type: FETCH_LOADING_FAILURE,
  payload: error,
});

export function fetchTest() {
  return async (dispatch) => {
    dispatch(fetchLoading());
    return await fetch(
      'https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses',
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchLoadingSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchLoadingFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
