import {combineReducers} from "redux";
import {authReducer} from "./AuthReducers";

const reducers = combineReducers({authReducer});

export default reducers