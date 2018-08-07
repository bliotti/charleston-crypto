const { map, prop } = require("ramda")

const getAllDocs = (db, options) => {
  return db.allDocs(options).then(res => map(prop("doc"), res.rows))
}

module.exports = { getAllDocs }
