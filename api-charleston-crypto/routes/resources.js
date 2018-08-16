const NodeHTTPError = require("node-http-error")
const { getResources, getResource } = require("../dal")
const bodyParser = require("body-parser")
const { propOr, isEmpty, not, concat, pathOr } = require("ramda")

const resourcesRoutes = app => {
  app.get("/resources", (req, res, next) => {
    const query = pathOr("", ["query", "filter"], req)
    getResources(query)
      .then(resources => res.send(resources))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get("/resources/bitcoin", (req, res, next) => {
    // STEP 1 fsAsync to get html file
    // STEP 2 transform html to json
    // STEP 3 send json to client

    getResource().then(resources => res.send(resources))
  })
}

module.exports = resourcesRoutes
