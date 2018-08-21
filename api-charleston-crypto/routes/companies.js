const NodeHTTPError = require('node-http-error')
const { getCompanies } = require('../dal')
const bodyParser = require('body-parser')
const { propOr, isEmpty, not, concat, pathOr } = require('ramda')

const companiesRoute = app => {
  app.get('/companies', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)
    getCompanies(query)
      .then(companies => res.send(companies))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = companiesRoute
