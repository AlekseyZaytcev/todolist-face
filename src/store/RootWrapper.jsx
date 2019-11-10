import React from "react"
import { Provider } from "react-redux"
import { compose, createStore } from "redux"
import rootReducer from "./reducers"
import persistState from "redux-localstorage"

const enhancer = compose(persistState())

export default ({ element }) => (
  <Provider store={createStore(rootReducer, {}, enhancer)}>{element}</Provider>
)
