import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'
import {statusAPI } from "./statusAPI"
// import {snackbarTrigger } from "./snackbarTrigger"

const url =global.URL+"data/";
const method = "GET"

const publicDataGetRequest = () => {
  return {
    type: types.PUBLIC_DATA_GET_REQUEST
  };
}

const publicDataGetReceive = (json) => {
  return {
    type: types.PUBLIC_DATA_GET_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

export const fetchPublicDataGet = (data, page) => dispatch => {
  dispatch(publicDataGetRequest())
  const options = {
    method : method,

    headers:{
      "Content-Type": "application/json",
    },
  };
  return fetch(url+ data+ "/"+ page+".json", options)
  .then(response => {
    dispatch(statusAPI(response.status))
    return response.json()
  })
  .then(json => {
    // if(json.ErrorFlag)
    // dispatch(snackbarTrigger(json.Message))
    dispatch(publicDataGetReceive(json))
  })
}
