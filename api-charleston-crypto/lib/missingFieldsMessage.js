const { compose, concat, join } = require('ramda')

module.exports = fields =>
  compose(
    concat('You are missing the following fields in your request body: '),
    join(', ')
  )(fields)
