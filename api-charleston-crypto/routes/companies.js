const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const { propOr, isEmpty, not, concat, pathOr } = require('ramda')
const {
  getCompanies,
  getCompany,
  addCompany,
  changeCompany,
  deleteCompany
} = require('../dal')
const checkRequiredFields = require('../lib/checkRequiredFields')
const missingFieldsMessage = require('../lib/missingFieldsMessage')
const cleanObject = require('../lib/cleanObject')

const requiredFields = [
  'name',
  'description',
  'firstName',
  'lastName',
  'description'
]

module.exports = app => {
  app.get('/companies', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)
    getCompanies(query)
      .then(companies => res.send(companies))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/company/:id', (req, res, next) => {
    const companyID = pathOr('', ['params', 'id'], req)

    getCompany(companyID)
      .then(company => res.status(200).send(company))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.post('/companies', bodyParser.json(), (req, res, next) => {
    const newCompany = propOr({}, 'body', req)

    if (isEmpty(newCompany)) {
      res
        .status(400)
        .send('Please provide a valid JSON document in the request body.')
      return
    }

    const missingFields = checkRequiredFields(requiredFields, newCompany)

    if (not(isEmpty(missingFields))) {
      res.status(400).send(missingFieldsMessage(missingFields))
      return
    }

    const cleanedCompanyDoc = cleanObject(requiredFields, newCompany)

    addCompany(cleanedCompanyDoc)
      .then(response => res.status(200).send(response))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.put('/companies', bodyParser.json(), (req, res, next) => {
    const changedCompany = propOr({}, 'body', req)

    if (isEmpty(changedCompany)) {
      res.status(400).send('Please provide a valid JSON document')
      return
    }

    const missingFields = checkRequiredFields(
      concat(requiredFields, ['_id', '_rev', 'type']),
      changedCompany
    )

    if (not(isEmpty(missingFields))) {
      res.status(400).send(missingFieldsMessage(missingFields))
      return
    }

    const cleanedCompanyDoc = cleanObject(
      concat(requiredFields, ['_id', '_rev', 'type']),
      changedCompany
    )

    changeCompany(cleanedCompanyDoc)
      .then(response => res.status(200).send(response))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
  app.delete('/companies/:id', (req, res, next) => {
    const companyID = pathOr('', ['params', 'id'], req)

    deleteCompany(companyID)
      .then(response => res.status(200).send(response))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}
