import {combineReducers} from "redux"

import authReducer from "./auth.js"

// root reducer combines all the reducers
export default combineReducers({
    authReducer
})