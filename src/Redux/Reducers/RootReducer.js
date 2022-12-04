import {combineReducers} from "redux";
import {authReducer} from "./AuthReducers";
import postReducer from "./PostReducer";
import timelineReducer from "./TimelineReducer";

const reducers = combineReducers({authReducer,postReducer,timelineReducer});

export default reducers