import * as types from '../constants/ActionTypes';

const snackbarTrigger = (message) => {
  console.log("message", message)
  return {
    type: types.SNACKBAR_TRIGGER,
    gets: message,
    receivedAt: Date.now()
  }
}
export {snackbarTrigger}
