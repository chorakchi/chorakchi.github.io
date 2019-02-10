import * as types from "../constants/ActionTypes";


export const statusApi = (state = {}, action) => {
  switch (action.type) {
    case types.STATUS_API:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        item: action.gets,
      };
    default:
      return state;
  }
};
