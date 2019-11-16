import { SET_AUTH_TOKEN, DESTROY_AUTH_TOKEN } from "./actions"

const defaultState = {
  token: "",
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, token: action.payload }
    case DESTROY_AUTH_TOKEN:
      return { ...state, token: action.payload }
    default:
  }

  return state
}
