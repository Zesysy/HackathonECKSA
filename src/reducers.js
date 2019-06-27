import {
  FETCH_LOADING,
  FETCH_LOADING_FAILURE,
  FETCH_LOADING_SUCCESS,
} from './Actions/fetchActions';

const initialState = { data: [], loading: false, error: null };

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_LOADING_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default fetchReducer;
