const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const {
  map,
  prop,
  merge,
  split,
  not,
  isEmpty,
  filter,
  propEq,
  propOr,
  contains
} = require('ramda')
const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const { getAllDocs } = require('./dal-helper')
const pkGen = require('./lib/pkGen')

const db = new PouchDB(DB_URL)

const getCategories = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'category_',
    endkey: 'category_\ufff0'
  }).then(
    categories =>
      isEmpty(query)
        ? categories
        : filter(
            category => contains(value, propOr('', key, category)),
            categories
          )
  )
}
const getCategory = id => db.get(id)

const getResources = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'resource',
    endkey: 'resource_\ufff0'
  }).then(
    resources =>
      isEmpty(query)
        ? resources
        : filter(
            resource => contains(value, propOr('', key, resource)),
            resources
          )
  )
}
const getResource = id => db.get(id)

const getCompanies = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'company',
    endkey: 'company_\ufff0'
  }).then(
    companies =>
      isEmpty(query)
        ? companies
        : filter(
            company => contains(value, propOr('', key, company)),
            companies
          )
  )
}

const getCompany = id => db.get(id)

const addCompany = item =>
  db.put(
    merge(item, {
      _id: pkGen('company_', item.name),
      type: 'company'
    })
  )

const changeCompany = doc => db.put(doc)

const deleteCompany = id => db.get(id).then(doc => db.remove(doc))

module.exports = {
  getCategory,
  getCategories,
  getResources,
  getResource,
  getCompanies,
  getCompany,
  addCompany,
  changeCompany,
  deleteCompany
}
