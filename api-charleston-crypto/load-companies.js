require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`
console.log('HERE', COUCHDB_SERVER)

const db = new PouchDB(DB_URL)

db.bulkDocs([
  {
    _id: 'company_commit-good',
    type: 'company',
    name: 'Commit Good',
    icon: 'C'
  },
  {
    _id: 'company_block-yard',
    type: 'company',
    name: 'Block Yard',
    icon: 'B'
  }
])

  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
