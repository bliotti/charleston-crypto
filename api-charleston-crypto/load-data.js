require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`
console.log("HERE", COUCHDB_SERVER)

const db = new PouchDB(DB_URL)

db.bulkDocs([
  {
    _id: "category_getting-started",
    type: "category",
    name: "Getting Started",
    icon: "H"
  },

  {
    _id: "category_history-of-bitcoin",
    type: "category",
    name: "History of Bitcoin",
    icon: "H"
  },

  {
    _id: "category_news-sites",
    type: "category",
    name: "News Sites",
    icon: "N"
  },

  {
    _id: "category_podcasts",
    type: "category",
    name: "Podcasts",
    icon: "P"
  }
])
  .then(result => console.log("success", JSON.stringify(result, null, 2)))
  .catch(err => console.log("err", err))
