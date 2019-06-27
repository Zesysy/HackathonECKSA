import {
  FETCH_ISLOADING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from './Actions/fetchActions';

const initialState = { data: [], isLoading: false, error: null };

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISLOADING:
      return { ...state, isLoading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_ERROR:
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

export default fetchReducer;
