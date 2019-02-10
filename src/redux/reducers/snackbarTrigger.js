import * as types from "../constants/ActionTypes";


export const snackbarTrigger = (state = {}, action) => {
  switch (action.type) {
    case types.SNACKBAR_TRIGGER:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        message: action.gets,
      };
    default:
      return state;
  }
};
