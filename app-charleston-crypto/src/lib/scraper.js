import { GET_RESOURCES, SET_CATEGORIES } from '../constants'
import {
  formatResourceObject,
  formatCategoriesObject
} from './formatResourceObject'

const scrapeIt = require('scrape-it')

const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = process.env.REACT_APP_CORS_URL
const fetchHTMLURL = `${corsIt}${urlBTC}`

/////////////////////////////////////////
//// Scrape Pattern One for resources.///
/////////////////////////////////////////

const scrapeParseObjOne = {
  item: {
    listItem: 'section div div div ul',
    data: {
      titleWithComment: {
        listItem: 'li'
      },
      title: {
        listItem: 'a'
      },
      href: {
        listItem: 'li',
        data: {
          url: {
            selector: 'a',
            attr: 'href'
          }
        }
      }
    }
  }
}

/////////////////////////////////////////////
//// Scrape Pattern Two for Category Titles//
/////////////////////////////////////////////

const scrapeParseObjTwo = {
  category: {
    listItem: 'section div div div h3'
  }
}

const scraper = dispatch =>
  scrapeIt(fetchHTMLURL, scrapeParseObjOne).then(({ data }) => {
    const scrapedResourcesOne = data.item

    scrapeIt(fetchHTMLURL, scrapeParseObjTwo).then(({ data }) => {
      const scrapedResourcesTwo = data.category
      const mappedCategories = formatCategoriesObject(scrapedResourcesTwo)

      // console.log(mappedCategories)

      window.localStorage.setItem(
        'extCategories',
        JSON.stringify(mappedCategories)
      )

      dispatch({ type: SET_CATEGORIES, payload: mappedCategories })

      const combinedScrapedResources = formatResourceObject(
        scrapedResourcesOne,
        scrapedResourcesTwo
      )

      //
      // Set to Local Storage
      //

      window.localStorage.setItem(
        'extResources',
        JSON.stringify(combinedScrapedResources)
      )
      window.localStorage.setItem(
        'extResourcesSetTime',
        JSON.stringify(Date.now())
      )

      dispatch({ type: GET_RESOURCES, payload: combinedScrapedResources })
    })
  })

export default scraper
