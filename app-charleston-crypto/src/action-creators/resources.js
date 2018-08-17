import { GET_RESOURCES } from "../constants"
import { isNil } from "ramda"
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

const amountOfTimeAllowedBeforeScrapedResourcesShouldBeChecked = 1000 * 60 * 60

export const fetchResources = (dispatch, getState) => {
  if (
    isNil(window.localStorage.getItem("extResources")) ||
    JSON.parse(window.localStorage.getItem("extResourcesSetTime")) <
      Date.now() - amountOfTimeAllowedBeforeScrapedResourcesShouldBeChecked
  ) {
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

      window.localStorage.setItem("extResources", JSON.stringify(data.item))
      window.localStorage.setItem(
        "extResourcesSetTime",
        JSON.stringify(Date.now())
      )

      dispatch({ type: GET_RESOURCES, payload: data.item })
    })
  } else {
    const extResources =
      JSON.parse(window.localStorage.getItem("extResources")) || []

    console.log("Pulled from storage")

    dispatch({ type: GET_RESOURCES, payload: extResources })
  }
}
