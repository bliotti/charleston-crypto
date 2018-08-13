import { SET_RESOURCES, RESOURCES_SEARCH_TEXT_UPDATED } from "../constants"

export const resources = (state = [], action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    default:
      return state
  }
}

export const resourcesSearchText = (state = " ", action) => {
  switch (action.type) {
    case RESOURCES_SEARCH_TEXT_UPDATED:
      return action.payload
    default:
      return state
  }
}
