import { SEARCH_TOGGLED } from "../constants"

export const search = (
  state = {
    expand: false
  },
  action
) => {
  switch (action.type) {
    case SEARCH_TOGGLED:
      return { expand: !state.expand }
    default:
      return state
  }
}
