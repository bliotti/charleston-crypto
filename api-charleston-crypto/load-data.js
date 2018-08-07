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
    _id: "category_health-and-wellness",
    type: "category",
    name: "Health and Wellness",
    shortDesc:
      "programs and services that provide mental, physical, and spiritual support",
    desc:
      "Health & Wellness includes programs and services that provide mental, physical, and spiritual support for current military members, retired veterans, caregivers, and for the friends and family of those individuals mentioned previously.",
    icon: "rowing"
  },

  {
    _id: "category_housing-and-homeless-prevention-programs",
    type: "category",
    name: "Housing and Homeless Prevention Programs",
    shortDesc:
      "programs and services that provide assistance in identifying safe and affordable housing",
    desc:
      "Housing/Homeless Prevention Programs include programs and services that provide assistance in identifying safe, affordable housing and/or in preventing homelessness through financial support with rental and utility payments.",
    icon: "home"
  },

  {
    _id: "category_information-and-referral-services",
    type: "category",
    name: "Information and Referral Services",
    shortDesc: "telephone help and crisis management",
    desc:
      "Information & Referral Services include telephone help/crisis management lines and websites to assist veterans and their family members in locating helpful information.",
    icon: "message"
  },

  {
    _id: "category_peer-support-and-recreation",
    type: "category",
    name: "Peer Support and Recreation",
    shortDesc:
      "veteran-specific support contacts for emotional wellness through social interactions",
    desc:
      "Peer Support & Recreation includes veteran-specific support contacts for emotional wellness and recreation in terms of community involvement through social interactions.",
    icon: "supervisor_account"
  },

])
  .then(result => console.log("success", JSON.stringify(result, null, 2)))
  .catch(err => console.log("err", err))
