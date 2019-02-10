import * as types from '../constants/ActionTypes';

const statusAPI = (status) => {
  return {
    type: types.STATUS_API,
    gets: status,
    receivedAt: Date.now()
  }
}
export {statusAPI}
