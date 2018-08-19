import { GET_RESOURCES } from "../constants"
import { isNil } from "ramda"
import formatResourceObject from "../lib/formatResourceObject"

const scrapeIt = require("scrape-it")
const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`

// TODO
// localStorage - COMPLETE
// grab Category - for filter and maybe icon avatar
// grab Commented Title for secondary text on list
// Set fallback - const url = process.env.REACT_APP_BASE_URL + "/resources"
// PWA

const amountOfTimeAllowedBeforeScrapedResourcesShouldBeChecked = 1 //1000 * 60 * 60

export const fetchResources = (dispatch, getState) => {
  if (
    isNil(window.localStorage.getItem("extResources")) ||
    JSON.parse(window.localStorage.getItem("extResourcesSetTime")) <
      Date.now() - amountOfTimeAllowedBeforeScrapedResourcesShouldBeChecked
  ) {
    scrapeIt(fetchHTMLURL, {
      item: {
        listItem: "section div div div ul",
        data: {
          titleWithComment: {
            listItem: "li"
          },
          title: {
            listItem: "a"
          },
          href: {
            listItem: "li",
            data: {
              url: {
                selector: "a",
                attr: "href"
              }
            }
          }
        }
      }
    }).then(({ data }) => {
      const scrapedResourcesOne = data.item

      scraperTwo(dispatch, getState, scrapedResourcesOne)
    })
  } else {
    //
    // PULLING FROM LOCAL STORAGE... NO FETCHING
    //

    const extResources =
      JSON.parse(window.localStorage.getItem("extResources")) || []
    console.log("Pulled from storage")
    dispatch({ type: GET_RESOURCES, payload: extResources })
  }
}

const scraperTwo = (dispatch, getState, scrapedResourcesOne) => {
  //
  // SCRAPES CATEGORIES
  // COMBINED SOURCES
  // SETS LOCAL STORAGE
  //

  scrapeIt(fetchHTMLURL, {
    category: {
      listItem: "section div div div h3"
    }
  }).then(({ data }) => {
    const scrapedResourcesTwo = data.category

    const combinedScrapedResources = formatResourceObject(
      scrapedResourcesOne,
      scrapedResourcesTwo
    )

    window.localStorage.setItem(
      "extResources",
      JSON.stringify(combinedScrapedResources)
    )
    window.localStorage.setItem(
      "extResourcesSetTime",
      JSON.stringify(Date.now())
    )

    dispatch({ type: GET_RESOURCES, payload: combinedScrapedResources })
  })
}
