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
    href:
      "https://medium.com/@nik5ter/explain-bitcoin-like-im-five-73b4257ac833",
    title: "Explain Bitcoin Like I'm Five",
    type: "resource",
    _id: "resource_explain-bitcoin-like-i'm-five",
    categoryID: "category_getting-started"
  },

  {
    href: "https://www.upfolio.com/ultimate-bitcoin-guide",
    title: "Bitcoin Explained (illustrated guide in simple terms)",
    type: "resource",
    _id: "resource_bitcoin-explained-(illustrated-guide-in-simple-terms)",
    categoryID: "category_getting-started"
  },

  {
    href: "pdf/bitcoin.pdf",
    title: "The Bitcoin Whitepaper written by Satoshi Nakamoto",
    type: "resource",
    _id: "resource_the-bitcoin-whitepaper-written-by-satoshi-nakamoto",
    categoryID: "category_getting-started"
  },

  {
    href: "http://fermatslibrary.com/s/bitcoin",
    title: "The Bitcoin Whitepaper with annotations",
    type: "resource",
    _id: "resource_the-bitcoin-whitepaper-with-annotations",
    categoryID: "category_getting-started"
  },

  {
    href: "https://www.youtube.com/watch?v:2u2x4T5HfsY",
    title: "The Bitcoin Whitepaper read out loud",
    type: "resource",
    _id: "resource_the-bitcoin-whitepaper-read-out-loud",
    categoryID: "category_getting-started"
  }
])

  .then(result => console.log("success", JSON.stringify(result, null, 2)))
  .catch(err => console.log("err", err))
