const router = require('express').Router()
const { login, register } = require('../controllers/authController.js')
const {validate} = require('../validators/index.js')
const {registrationRules} = require("../validators/auth/register.js")
const {loginRules} = require("../validators/auth/login.js")

//process with form validation before calling login function

//login rules uses express-validator methods to intercept request and enforces validation
//express validator methods pass the results of the validations to the req
//validate is a middleware which checks if req contains errors injected by the express-validator methods
//if error, return error response, if no error, continue to next stage
router.post("/login", loginRules, validate, login)

//process with form validation before calling register function
//we need to explicitly call registrationRules(), but validate() will get called by it?
router.post("/register", registrationRules, validate, register)

//exports these routes using router variable to the middleware index.js
module.exports = router
