const NodeHTTPError = require("node-http-error")
const { getCategories } = require("../dal")
const bodyParser = require("body-parser")
const { propOr, isEmpty, not, concat, pathOr } = require("ramda")

const categoriesRoutes = app => {
  app.get("/", (req, res) => res.send("Crypto API"))

  app.get("/categories", (req, res, next) => {
    const query = pathOr("", ["query", "filter"], req)
    getCategories(query)
      .then(categories => res.send(categories))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = categoriesRoutes
