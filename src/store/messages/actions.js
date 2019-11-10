export const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE"
export const SET_WARNING_MESSAGE = "SET_WARNING_MESSAGE"
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
export const DISMISS_SUCCESS_MESSAGE = "DISMISS_SUCCESS_MESSAGE"
export const DISMISS_WARNING_MESSAGE = "DISMISS_WARNING_MESSAGE"
export const DISMISS_ERROR_MESSAGE = "DISMISS_ERROR_MESSAGE"
export const DISMISS_ALL_MESSAGE = "DISMISS_ALL_MESSAGE"

export const setSuccessMessage = message => ({
  type: SET_SUCCESS_MESSAGE,
  payload: message,
})

export const setWarningMessage = message => ({
  type: SET_WARNING_MESSAGE,
  payload: message,
})

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
})

export const dismissSuccessMessage = () => ({
  type: DISMISS_SUCCESS_MESSAGE,
  payload: "",
})

export const dismissWarningMessage = () => ({
  type: DISMISS_WARNING_MESSAGE,
  payload: "",
})

export const dismissErrorMessage = () => ({
  type: DISMISS_ERROR_MESSAGE,
  payload: "",
})

export const dismissAllMessage = () => ({
  type: DISMISS_ALL_MESSAGE,
  payload: "",
})
