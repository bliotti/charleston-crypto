import fetch from 'isomorphic-fetch'
import { SET_CATEGORIES } from '../constants'
import { sort } from 'ramda'
const url = process.env.REACT_APP_BASE_URL + '/categories'

export const setCategories = async (dispatch, getState) => {
  const categories = await fetch(url)
    .then(res => res.json())
    .then(res => sort((a, b) => a.sortKey - b.sortKey, res))
  console.log(categories)
  dispatch({ type: SET_CATEGORIES, payload: categories })
}
