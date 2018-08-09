import fetch from "isomorphic-fetch"
import { SET_RESOURCES } from "../constants"
const url = process.env.REACT_APP_BASE_URL + "/resources"

export const setResources = async (dispatch, getState) => {
  const resources = await fetch(url).then(res => res.json())

  console.log(resources)
  dispatch({ type: SET_RESOURCES, payload: resources })
}
