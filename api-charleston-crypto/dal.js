const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))
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
} = require("ramda")
const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const { getAllDocs } = require("./dal-helper")
const pkGen = require("./lib/pkGen")

const db = new PouchDB(DB_URL)

const getCategories = query => {
  const [key, value] = not(isEmpty(query)) ? split(":", query) : ["", ""]
  return getAllDocs(db, {
    include_docs: true,
    startkey: "category_",
    endkey: "category_\ufff0"
  }).then(
    categories =>
      isEmpty(query)
        ? categories
        : filter(
            category => contains(value, propOr("", key, category)),
            categories
          )
  )
}

const getCategory = id => db.get(id)

module.exports = { getCategory, getCategories }
