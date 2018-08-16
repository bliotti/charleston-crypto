import fetch from "isomorphic-fetch"
import { SET_RESOURCES, GET_RESOURCES } from "../constants"
// import { parse } from "himalaya"
// import fetchJsonp from "fetch-jsonp"
// const rp = require("request-promise")
const scrapeIt = require("scrape-it")

const url = process.env.REACT_APP_BASE_URL + "/resources"
const urlBTC = process.env.REACT_APP_BTC_URL
const corsIt = "https://cors.io?"
const fetchHTMLURL = `${corsIt}${urlBTC}`
// export const setResources = async (dispatch, getState) => {
//   const resources = await fetch(url).then(res => res.json())

//   // console.log(resources)
//   dispatch({ type: SET_RESOURCES, payload: resources })
// }

export const getResources = async (dispatch, getState) => {
  // const resources = await fetch(fetchHTMLURL)
  //   .then(res => res.text())
  //   .then(htmlText => parse(htmlText))
  // console.log(resources)

  const resources = await scrapeIt(fetchHTMLURL, {
    category: "h3",
    item: {
      listItem: "section div div div ul li",

      data: {
        category_name: "section div div div h3",
        title: "a",
        //closet: "ul",
        href: {
          selector: "a",
          attr: "href"
        }
      }
    }
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    console.log(data)
  })

  // const html = parse(resources)
  // console.log({ html })
  dispatch({ type: GET_RESOURCES, payload: null })
}

//
