const { pick } = require('ramda')

module.exports = (fields, obj) => pick(fields, obj)
