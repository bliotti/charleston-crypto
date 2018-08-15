import { GET_EXCHANGE_DATA } from "../constants"

export const exchangeData = (state = [], action) => {
  switch (action.type) {
    case GET_EXCHANGE_DATA:
      return action.payload
    default:
      return state
  }
}
