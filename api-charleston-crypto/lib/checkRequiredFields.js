const { difference, keys } = require('ramda')

module.exports = (fields, obj) => difference(fields, keys(obj))
