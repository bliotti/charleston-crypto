import fetch from 'isomorphic-fetch'
import { GET_EXCHANGE_DATA } from '../constants'

const url = process.env.REACT_APP_EXCHANGE_DATA_URL
// console.log(url)

export const getExchangeData = async (dispatch, getState) => {
  const exchangeData = await fetch(url).then(res => res.json())
  // console.log(exchangeData)
  dispatch({ type: GET_EXCHANGE_DATA, payload: exchangeData })
}
