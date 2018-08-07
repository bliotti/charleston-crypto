const slugify = require("slugify")
const { compose, concat, toLower } = require("ramda")

module.exports = (prefix, val) => {
  return compose(
    concat(prefix),
    slugify,
    toLower
  )(val)
}
