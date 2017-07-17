const express = require('express')
const mongoose = require('mongoose')

const bcrypt = require('bcrypt-as-promised')

const Worker = require('../models/worker')

const {
  WORKERS_INDEX,
  WORKERS_SHOW,
  WORKERS_CREATE,
  WORKERS_DELETE,
  WORKERS_UPDATE,
  WORKERS_LOGIN,
} = require('../../routes')

const router = express.Router()

router.get(WORKERS_SHOW, (req, res, next) => {
  const { id } = req.params

  Worker
    .findById(id)
    .then((worker) => {
      if (worker) {
        res.json(worker)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.get(WORKERS_INDEX, (req, res, next) => {
  Worker
    .find({})
    .then((workers) => {
      res.json(workers)
    })
    .catch(next)
})

router.post(WORKERS_CREATE, (req, res, next) => {
  const { username, password, services, area, firstName, lastName } = req.body

  bcrypt.hash(password)
    .then((hashedPW) => {
      const user = new Worker({ username, password: hashedPW, services, area, firstName, lastName })
      user
        .save()
        .then((newUser) => {
          res.status(201).json(newUser)
        })
        .catch(next)
    })
})

router.post(WORKERS_LOGIN, (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  const { id } = req.params

  User
    .findById(id)
    .then((worker) => {
      if (!worker) {
        console.log(user, 'no matching user was found!')
      } else {
        bcrypt.compare(password, worker.password)
          .then((isMatch) => {
            req.session.user = newUser
            req.session.type = 'WORKER'
            console.log('this works and session is', isMatch, req.session)
          })
          .catch(bcrypt.MISMATCH_ERROR, next)
          .catch(next)
      }
    })
})

router.delete(WORKERS_DELETE, (req, res, next) => {
  const { id } = req.params

  Worker
    .findById(id)
    .then((worker) => {
      if (worker) {
        worker.remove()
          .then((deletedWorker) => {
            res.json(deletedWorker)
          })
          .catch(next)
      }
    })
})

router.put(WORKERS_UPDATE, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Worker
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    .then((newWorker) => {
      if (newWorker) {
        res.json(newWorker)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

module.exports = router
