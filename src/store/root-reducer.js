import { combineReducers } from "redux";

import { userReducer } from "./user/user.rerducer";

export const rootReducer = combineReducers({
    user: userReducer,
});