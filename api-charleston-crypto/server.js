require('dotenv').config()
const PORT = process.env.PORT
const app = require('express')()
const bodyParser = require('body-parser')
const categories = require('./routes/categories')
const resources = require('./routes/resources')
const companies = require('./routes/companies')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors({ credentials: true }))

companies(app)
categories(app)
resources(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
})

app.use((err, req, res, next) => {
  console.log('error', err)
  next(err)
})

app.listen(PORT || 5000, () =>
  console.log(`Go to http://localhost:${PORT || 5000}`)
)
