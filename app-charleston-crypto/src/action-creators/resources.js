import { GET_RESOURCES } from "../constants"
import { isNil, map } from "ramda"
import commentPuller from "../lib/commentPuller"
const scrapeIt = require("scrape-it")
const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`
const uuid = require("uuid")

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
          /*
          // categoryID: {
          //   listItem: "a",
          //   data: {
          //     categoryID: {
          //       convert: () => "category_"
          //     }
          //   }
          // },
          // type: {
          //   convert: () => "resource"
          // },
          // _id: {
          //   listItem: "a",
          //   data: {
          //     _id: {
          //       convert: () => `resource_${uuid.v4()}`
          //     }
          //   }
          // },
*/
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
    }).then(({ data, response }) => {
      // console.log(`Status Code: ${response.statusCode}`)
      // console.log(data.item)

      // const mod = map(commentPuller, data.item)

      // console.log(JSON.stringify(mod))
      // window.localStorage.setItem("extResources", JSON.stringify(mod))
      // window.localStorage.setItem(
      //   "extResourcesSetTime",
      //   JSON.stringify(Date.now())
      // )
      // dispatch({ type: GET_RESOURCES, payload: mod })
      const mod = data.item
      scraperTwo(dispatch, getState, mod)
    })
  } else {
    const extResources =
      JSON.parse(window.localStorage.getItem("extResources")) || []

    console.log("Pulled from storage")

    dispatch({ type: GET_RESOURCES, payload: extResources })
  }
}

const scraperTwo = (dispatch, getState, mod) => {
  scrapeIt(fetchHTMLURL, {
    category: {
      listItem: "section div div div h3"
    }
  }).then(({ data }) => {
    console.log("scraper1", JSON.stringify(mod))
    console.log("scraper2", JSON.stringify(data.category))
  })
}
