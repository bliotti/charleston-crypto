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
    description: 'Blockchain good',
    firstName: 'Clay',
    lastName: 'Matthews',
    site: 'https://commitgood.com/',
    img:
      'https://pbs.twimg.com/profile_images/942810476899057666/O7XYB0WT_400x400.jpg'
  },
  {
    _id: 'company_blockyard',
    type: 'company',
    name: 'BlockYard',
    description: 'Mining Facility',
    firstName: 'Brett',
    lastName: 'Garmen',
    site: 'https://www.garmansouthern.com/',
    img:
      'https://static1.squarespace.com/static/5710312ac2ea51282965b4a0/t/5b4de9c1aa4a99d6f5bc2a19/1533299065363/?format=original'
  },
  {
    _id: 'company_palmetto-chain',
    type: 'company',
    name: 'Palmetto Chain',
    description: 'Blockchain of Charleston',
    firstName: 'Drew',
    lastName: 'Poda',
    site: 'https://palmettochain.io/',
    img:
      '  https://img1.wsimg.com/isteam/ip/29eef9b7-b694-488b-afb4-ff7569a0d10e/8d203d56-c0ab-475c-a69a-e4117bdc3564.png/:/rs=w:200,h:220,cg:true,m/cr=w:300,h:220,a:cc'
  }
])

  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
