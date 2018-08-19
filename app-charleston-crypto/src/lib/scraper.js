import { GET_RESOURCES } from "../constants"
import formatResourceObject from "./formatResourceObject"

const scrapeIt = require("scrape-it")
const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`

const scrapeParseObjOne = {
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
}
const scrapedResourcesTwo = {
  category: {
    listItem: "section div div div h3"
  }
}

const scraper = (dispatch, getState) =>
  scrapeIt(fetchHTMLURL, scrapeParseObjOne).then(({ data }) => {
    const scrapedResourcesOne = data.item

    scrapeIt(fetchHTMLURL, scrapedResourcesTwo).then(({ data }) => {
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

      // console.log({ combinedScrapedResources })
      dispatch({ type: GET_RESOURCES, payload: combinedScrapedResources })
    })
  })

export default scraper
