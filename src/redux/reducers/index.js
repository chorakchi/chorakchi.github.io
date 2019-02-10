import { combineReducers } from "redux";

import { snackbarTrigger } from "./snackbarTrigger";
import { statusApi } from "./statusApi";
import { publicDataGet } from "./publicDataGet";


export default combineReducers({
    snackbarTrigger,
    statusApi,
    publicDataGet,

})