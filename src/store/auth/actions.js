export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN"
export const DESTROY_AUTH_TOKEN = "DESTROY_AUTH_TOKEN"

export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  payload: token,
})

export const destroyAuthToken = () => ({
  type: SET_AUTH_TOKEN,
  payload: "",
})
