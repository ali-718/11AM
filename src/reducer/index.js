import { combineReducers } from "redux";
import userreducer from "./userReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
});
