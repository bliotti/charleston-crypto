import { GET_RESOURCES } from "../constants"
const scrapeIt = require("scrape-it")
const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`
const uuid = require("uuid")

// TODO
// localStorage
// grab Category - for filter and maybe icon avatar
// grab Commented Title for secondary text on list
// Set fallback - const url = process.env.REACT_APP_BASE_URL + "/resources"
// PWA

export const fetchResources = (dispatch, getState) => {
  scrapeIt(fetchHTMLURL, {
    item: {
      listItem: "section div div div ul li",
      data: {
        type: {
          convert: () => "resource"
        },
        categoryID: {
          convert: () => "category_"
        },
        _id: {
          convert: () => `resource_${uuid.v4()}`
        },
        titleWithComment: {
          selector: "a",
          closest: "li"
        },
        title: "a",
        href: {
          selector: "a",
          attr: "href"
        }
      }
    }
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    console.log(data.item)
    dispatch({ type: GET_RESOURCES, payload: data.item })
  })
}
