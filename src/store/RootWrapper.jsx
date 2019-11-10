import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"

export default ({ element }) => (
  <Provider store={createStore(rootReducer)}>{element}</Provider>
)
