import * as types from "../constants/ActionTypes";


export const publicDataGet = (state = {}, action) => {
  switch (action.type) {
    case types.PUBLIC_DATA_GET_RECEIVE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        items: action.gets,
      };
    case types.PUBLIC_DATA_GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        didInvalidate: false
      };
    default:
      return state;
  }
};
