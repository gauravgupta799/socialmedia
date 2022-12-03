import {combineReducers} from "redux";
import {authReducer} from "./AuthReducers";
import postReducer from "./PostReducer";

const reducers = combineReducers({authReducer,postReducer});

export default reducers