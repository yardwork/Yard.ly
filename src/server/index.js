const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongooseConnection = require('mongoose').connection
const session = require('express-session')

const db = require('./db/config.js')
const usersRoute = require('./db/routes/users')
const workersRoute = require('./db/routes/workers')
const requestsRoute = require('./db/routes/requests')
const MongoStore = require('connect-mongo')(session)

const app = express()

app.use(session({
  secret: 'COOKIE_SECRET'
}))

app.use('/api',cors(), bodyParser.json(), usersRoute, workersRoute, requestsRoute)

app.use(express.static(path.join(__dirname, '../public')))
app.get('/api/session', function (req, res) {
  console.log('it is this', req.session)
  res.send(req.session)
})

app.get('/api/logout', function (req, res) {
  console.log(req.session)
  req.session.destroy();
  console.log('logged out, session: ', req.session);
  res.send('You have logged out')
});



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use('*', function (req, res) {
  console.log('it will be a 404')
  res.status(404).send('File not found.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
