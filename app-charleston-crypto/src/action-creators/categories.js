import fetch from "isomorphic-fetch"
import { SET_CATEGORIES } from "../constants"
const url = process.env.REACT_APP_BASE_URL + "/categories"

export const setCategories = async (dispatch, getState) => {
  const categories = await fetch(url).then(res => res.json())
  dispatch({ type: SET_CATEGORIES, payload: categories })
}
