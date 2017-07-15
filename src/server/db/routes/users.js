const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const bcrypt = require('bcrypt-as-promised')

const User = require('../models/user')

const {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_DELETE,
  USERS_UPDATE,
  ADDRESS_ADD,
  ADDRESS_DELETE,
} = require('../../routes')
/* export const USERS_INDEX = '/users'
export const USERS_SHOW = '/users/:id'
export const USERS_CREATE = '/users'
export const USERS_UPDATE = '/users/:id'
export const USERS_DELETE = '/users/:id'*/

const router = express.Router()

router.get(USERS_SHOW, (req, res, next) => {
  const { id } = req.params

  User
    .findById(id)
    .then((user) => {
      if (user) {
        res.json(user)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.get(USERS_INDEX, (req, res, next) => {
  User
    .find({})
    .then((users) => {
      res.json(users)
    })
    .catch(next)
})

router.post(USERS_CREATE, (req, res, next) => {
  const password = req.body.password
  bcrypt.hash(password)
    .then((hashedPassword) => {
      const user = new User({ username: req.body.username, password: hashedPassword })
      user
        .save()
        .then((newUser) => {
          res.status(201).json(newUser)
        })
        .catch(next)
    })
})

router.delete(USERS_DELETE, (req, res, next) => {
  const { id } = req.params

  User
    .findById(id)
    .then((user) => {
      if (user) {
        user.remove()
          .then((deletedUser) => {
            res.json(deletedUser)
          })
          .catch(next)
      }
    })
})

router.put(USERS_UPDATE, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  User
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.put(ADDRESS_ADD, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  User
    .findById(id)
    .then((user) => {
      console.log('user', user)
      user.addresses.push(req.body)
      return user.save().then((updatedUser) => {
        console.log('updatedUser', updatedUser)
        res.json(updatedUser)
      })
    })
    .catch(next)
})

router.put(ADDRESS_DELETE, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  User
    .findById(id)
    .then((user) => {
      console.log(req.body.index)
      user.addresses.splice(req.body.index, 1)
      return user.save().then((updatedUser) => {
        res.json(updatedUser)
      })
    })
    .catch(next)
})

module.exports = router
