import { GET_RESOURCES } from "../constants"
const scrapeIt = require("scrape-it")

const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`

// Optional List for fallback from CouchDB
// const url = process.env.REACT_APP_BASE_URL + "/resources"

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
