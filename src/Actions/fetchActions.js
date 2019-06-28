export const FETCH_ISLOADING = 'FETCH_ISLOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchIsLoading = (name) => ({
  type: `${name}/${FETCH_ISLOADING}`,
});

export const fetchSuccess = (name, data) => ({
  type: `${name}/${FETCH_SUCCESS}`,
  payload: data,
});

export const fetchError = (name, error) => ({
  type: `${name}/${FETCH_ERROR}`,
  payload: error,
});
