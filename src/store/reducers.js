import { combineReducers } from "redux"
import { authReducer } from "./auth/reducers"
import { messageReducer } from "./messages/reducers"

export default combineReducers({
  auth: authReducer,
  messages: messageReducer,
})
