import { combineReducers } from "redux";

import { snackbarTrigger } from "./snackbarTrigger";
import { statusApi } from "./statusApi";
import { publicDataGet } from "./publicDataGet";
import { mdDataGet } from "./mdDataGet";


export default combineReducers({
    snackbarTrigger,
    statusApi,
    publicDataGet,
    mdDataGet,

})