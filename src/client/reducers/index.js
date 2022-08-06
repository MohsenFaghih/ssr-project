import { combineReducers } from "redux";
import adminReducers from "./adminReducers";
import authReducers from "./authReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
    users: usersReducers,
    auth: authReducers,
    admins: adminReducers
})
