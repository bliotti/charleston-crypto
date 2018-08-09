const NodeHTTPError = require("node-http-error")
const { getResources } = require("../dal")
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
}

module.exports = resourcesRoutes
