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
    _id: 'category_getting-started',
    type: 'category',
    name: 'Getting Started',
    icon: 'G',
    sortKey: 1,
    featured: true
  },
  {
    _id: 'category_history-of-bitcoin',
    type: 'category',
    name: 'History of Bitcoin',
    icon: 'H',
    sortKey: 2,
    featured: false
  },
  {
    _id: 'category_news-sites',
    type: 'category',
    name: 'News Sites',
    icon: 'N',
    sortKey: 3,
    featured: false
  },
  {
    _id: 'category_podcasts',
    type: 'category',
    name: 'Podcasts',
    icon: 'P',
    sortKey: 4,
    featured: true
  },
  {
    _id: 'category_discussion-forums',
    type: 'category',
    name: 'Discussion Forums',
    icon: 'D',
    sortKey: 5,
    featured: false
  },
  {
    _id: 'category_miscellaneous-statistics',
    type: 'category',
    name: 'Miscellaneous Statistics',
    icon: 'M',
    sortKey: 6,
    featured: false
  },
  {
    _id: 'category_transaction-fee-estimates',
    type: 'category',
    name: 'Transaction Fee Estimates',
    icon: 'T',
    sortKey: 7,
    featured: false
  },
  {
    _id: 'category_block-explorers',
    type: 'category',
    name: 'Block Explorers',
    icon: 'B',
    sortKey: 8,
    featured: false
  },

  {
    _id: 'category_visualizations',
    type: 'category',
    name: 'Visualizations',
    icon: 'V',
    sortKey: 9,
    featured: true
  },
  {
    _id: 'category_mining',
    type: 'category',
    name: 'Mining',
    icon: 'M',
    sortKey: 10,
    featured: false
  },
  {
    _id: 'category_deep-dive-technical-resources',
    type: 'category',
    name: 'Deep Dive Technical Resources',
    icon: 'D',
    sortKey: 11,
    featured: false
  },
  {
    _id: 'category_developer-tools',
    type: 'category',
    name: 'Developer Tools',
    icon: 'P',
    sortKey: 12,
    featured: false
  },
  {
    _id: 'category_security',
    type: 'category',
    name: 'Security',
    icon: 'D',
    sortKey: 13,
    featured: false
  },
  {
    _id: 'category_miscellaneous-statistics',
    type: 'category',
    name: 'Miscellaneous Statistics',
    icon: 'M',
    sortKey: 14,
    featured: false
  },
  {
    _id: 'category_setting-up-a-wallet',
    type: 'category',
    name: 'Setting up a Wallet',
    icon: 'S',
    sortKey: 15,
    featured: false
  },
  {
    _id: 'category_running-a-node',
    type: 'category',
    name: 'Running a Node',
    icon: 'R',
    sortKey: 16,
    featured: false
  },

  {
    _id: 'category_online-courses',
    type: 'category',
    name: 'Online Courses',
    icon: 'P',
    sortKey: 17,
    featured: false
  },
  {
    _id: 'category_documentaries',
    type: 'category',
    name: 'Documentaries',
    icon: 'D',
    sortKey: 18,
    featured: false
  },
  {
    _id: 'category_video-presentations',
    type: 'category',
    name: 'Video Presentations',
    icon: 'M',
    sortKey: 19,
    featured: false
  },
  {
    _id: 'category_high-quality-blogs',
    type: 'category',
    name: 'High Quality Blogs',
    icon: 'T',
    sortKey: 20,
    featured: false
  },
  {
    _id: 'category_buying-bitcoins',
    type: 'category',
    name: 'Buying Bitcoins',
    icon: 'B',
    sortKey: 21,
    featured: false
  },

  {
    _id: 'category_advanced-trading',
    type: 'category',
    name: 'Advanced Trading',
    icon: 'V',
    sortKey: 22,
    featured: false
  },
  {
    _id: 'category_realtime-exchange-data',
    type: 'category',
    name: 'Realtime Exchange Data',
    icon: 'M',
    sortKey: 23,
    featured: false
  },
  {
    _id: 'category_tax-accounting',
    type: 'category',
    name: 'Tax Accounting',
    icon: 'D',
    sortKey: 24,
    featured: false
  },
  {
    _id: 'category_privacy',
    type: 'category',
    name: 'Privacy',
    icon: 'P',
    sortKey: 25,
    featured: false
  },
  {
    _id: 'category_lightning-network',
    type: 'category',
    name: 'Lightning Network',
    icon: 'D',
    sortKey: 26,
    featured: false
  },
  {
    _id: 'category_bitcoin-forks',
    type: 'category',
    name: 'Bitcoin Forks',
    icon: 'M',
    sortKey: 27,
    featured: false
  },
  {
    _id: 'category_crypto-careers',
    type: 'category',
    name: 'Crypto Careers',
    icon: 'S',
    sortKey: 28,
    featured: false
  },
  {
    _id: 'category_crypto-charity',
    type: 'category',
    name: 'Crypto Charity',
    icon: 'R',
    sortKey: 29,
    featured: false
  }
])

  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
