const httpHandler = require('./../httpHandlers/price')
const express = require('express')
const router = express.Router()

router.route('/')
	.get(httpHandler.all)
	.post(httpHandler.add)
router.route('/:id')
	.get(httpHandler.get)
	.post(httpHandler.search)
	.put(httpHandler.put)
	.delete(httpHandler.del)

module.exports = router