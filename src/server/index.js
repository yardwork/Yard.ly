const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./db/config.js')
const usersRoute = require('./db/routes/users')
const workersRoute = require('./db/routes/workers')

const app = express()

app.use('/api', bodyParser.json(), usersRoute, workersRoute)

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use('*', function (req, res) {
  res.status(404).send('File not found.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
