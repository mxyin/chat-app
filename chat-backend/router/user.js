const router = require('express').Router()
const { update } = require('../controllers/userController.js')
const { validate } = require('../validators/index.js')
const { auth } = require('../middleware/auth.js')

router.use(auth)
router.post("/update", update)

module.exports = router
