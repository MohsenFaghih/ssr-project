import { combineReducers } from "redux";
import authReducers from "./authReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
    users: usersReducers,
    auth: authReducers
})
