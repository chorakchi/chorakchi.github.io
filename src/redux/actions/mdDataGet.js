import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'
import {statusAPI } from "./statusAPI"
// import {snackbarTrigger } from "./snackbarTrigger"

const url =global.URL+"data/";
const method = "GET"

const mdDataGetRequest = () => {
  return {
    type: types.MD_DATA_GET_REQUEST
  };
}

const mdDataGetReceive = (text) => {
  return {
    type: types.MD_DATA_GET_RECEIVE,
    gets: text,
    receivedAt: Date.now()
  }
}

export const fetchMdDataGet = (path, postName) => dispatch => {
  dispatch(mdDataGetRequest())
  const options = {
    method : method,

    headers:{
      "Content-Type": "application/json",
    },
  };
  return fetch(url+ path+ "/"+ postName+".md", options)
  .then(response => {
    dispatch(statusAPI(response.status))
    return response.text()
  })
  .then(text => {
    // if(json.ErrorFlag)
    // dispatch(snackbarTrigger(json.Message))
    dispatch(mdDataGetReceive(text))
  })
}
