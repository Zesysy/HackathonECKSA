import {
  FETCH_ISLOADING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from './Actions/fetchActions';

const initialState = { data: [], isLoading: false, error: null };

const fetchReducerCreator = (name) => (state = initialState, action) => {
  switch (action.type) {
    case `${name}/${FETCH_ISLOADING}`:
      return { ...state, isLoading: true, error: null };
    case `${name}/${FETCH_SUCCESS}`:
      return { ...state, isLoading: false, data: action.payload };
    case `${name}/${FETCH_ERROR}`:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default fetchReducerCreator;
