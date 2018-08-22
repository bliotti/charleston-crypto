import { GET_COMPANIES } from '../constants'

export const companies = (state = [], action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload
    default:
      return state
  }
}
