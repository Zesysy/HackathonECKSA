export const FETCH_ISLOADING = 'FETCH_ISLOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchIsLoading = () => ({
  type: FETCH_ISLOADING,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});
