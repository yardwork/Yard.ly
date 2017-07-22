const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const bcrypt = require('bcrypt-as-promised')

const Request = require('../models/request')

const {
  SESSION
} = require('../../routes')

app.get('/api/session', function (req, res) {
  console.log('it is this', req.session)
  res.send(req.session)
})

app.get('/api/logout', function (req, res) {
  console.log(req.session)
  req.session.destroy();
  console.log('logged out, session: ', req.session);
  res.send('You have loggasfded out')
});

const router = express.Router()

module.exports = router
