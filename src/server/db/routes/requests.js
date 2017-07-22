const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const bcrypt = require('bcrypt-as-promised')

const Request = require('../models/request')

const {
	REQUESTS_INDEX,
	REQUESTS_SHOW,
	REQUESTS_CREATE,
	REQUESTS_DELETE,
	REQUESTS_UPDATE,
  REQUESTS_FILTER,
  REQUESTS_USER,
  REQUESTS_WORKER,
} = require('../../routes')
/* export const REQUESTS_INDEX = '/requests'
export const REQUESTS_SHOW = '/requests/:id'
export const REQUESTS_CREATE = '/requests'
export const REQUESTS_UPDATE = '/users/:id'
export const REQUESTS_DELETE = '/users/:id'*/

const router = express.Router()

router.get(REQUESTS_SHOW, (req, res, next) => {
	const { id } = req.params

	Request.findById(id)
		.then(request => {
			if (request) {
				res.json(request)
				return
			}
			res.sendStatus(404)
		})
		.catch(next)
})

console.log('hello world')
router.get(REQUESTS_INDEX, (req, res, next) => {
	Request.find({})
		.then(requests => {
			res.json(requests)
		})
		.catch(next)
})

router.post(REQUESTS_CREATE, (req, res, next) => {
	const request = new Request({
		jobname: req.body.jobname,
		userId: req.body.userId,
		workerId: req.body.workerId,
		userFirst: req.body.userFirst,
		workerFirst: req.body.workerFirst,
		accepted: false,
		services: req.body.services,
		equipment: req.body.equipment,
		date: req.body.date,
		address: req.body.address,
		time: req.body.time,
		image: req.body.image,
		hours: req.body.hours,
		rate: req.body.rate,
	})
	request
		.save()
		.then(newRequest => {
			res.status(201).json(newRequest)
		})
		.catch(next)
})

router.delete(REQUESTS_DELETE, (req, res, next) => {
	const { id } = req.params

	Request.findById(id).then(request => {
		if (request) {
			request
				.remove()
				.then(deletedRequest => {
					res.json(deletedRequest)
				})
				.catch(next)
		}
	})
})

router.put(REQUESTS_UPDATE, (req, res, next) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.sendStatus(404)
		return
	}

	Request.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		.then(newRequest => {
			if (newRequest) {
				res.json(newRequest)
				return
			}
			res.sendStatus(404)
		})
		.catch(next)
})


router.get(REQUESTS_FILTER, (req, res, next) => {
	const { uid, wid } = req.params
	Request.find({
    userId: uid,
    workerId: wid,
  })
		.then(requests => {
			if (requests) {
				res.json(requests)
				return
			}
			res.sendStatus(404)
		})
		.catch(next)
})

router.get(REQUESTS_USER, (req, res, next) => {
	const { uid } = req.params
	Request.find({
    userId: uid,
  })
		.then(requests => {
			if (requests) {
				res.json(requests)
				return
			}
			res.sendStatus(404)
		})
		.catch(next)
})

router.get(REQUESTS_WORKER, (req, res, next) => {
	const { wid } = req.params
	Request.find({
    workerId: wid,
  })
		.then(requests => {
			if (requests) {
				res.json(requests)
				return
			}
			res.sendStatus(404)
		})
		.catch(next)
})

module.exports = router
