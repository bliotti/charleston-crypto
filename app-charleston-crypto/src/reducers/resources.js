import { SET_RESOURCES } from "../constants"

export const resources = (state = [], action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    default:
      return state
  }
}
