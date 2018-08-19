/* eslint-disable no-unused-expressions */
import { isNil } from 'ramda'
import { GET_RESOURCES, SET_CATEGORIES } from '../constants'
import scraper from '../lib/scraper'

// TODO
// Set fallback - const url = process.env.REACT_APP_BASE_URL + "/resources"
// PWA

const scrapeElapsedTime = 1000 * 60 * 60

export const fetchResources = (dispatch, getState) => {
  isNil(window.localStorage.getItem('extResources')) ||
  isNil(window.localStorage.getItem('extCategories')) ||
  JSON.parse(window.localStorage.getItem('extResourcesSetTime')) <
    Date.now() - scrapeElapsedTime
    ? (console.log('Scraped and Set to LS'), scraper(dispatch, getState))
    : (console.log('Pulled from LS'),
      dispatch({
        type: SET_CATEGORIES,
        payload: JSON.parse(window.localStorage.getItem('extCategories')) || []
      }),
      dispatch({
        type: GET_RESOURCES,
        payload: JSON.parse(window.localStorage.getItem('extResources')) || []
      }))
}
