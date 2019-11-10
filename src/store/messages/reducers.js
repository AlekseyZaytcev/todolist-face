import {
  SET_SUCCESS_MESSAGE,
  SET_WARNING_MESSAGE,
  SET_ERROR_MESSAGE,
  DISMISS_SUCCESS_MESSAGE,
  DISMISS_WARNING_MESSAGE,
  DISMISS_ERROR_MESSAGE,
  DISMISS_ALL_MESSAGE,
} from "./actions"

const defaultState = {
  successMessage: "",
  warningMessage: "",
  errorMessage: "",
}

export const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload }
    case SET_WARNING_MESSAGE:
      return { ...state, warningMessage: action.payload }
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload }
    case DISMISS_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload }
    case DISMISS_WARNING_MESSAGE:
      return { ...state, warningMessage: action.payload }
    case DISMISS_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload }
    case DISMISS_ALL_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
        warningMessage: action.payload,
        errorMessage: action.payload,
      }
  }

  return state
}
