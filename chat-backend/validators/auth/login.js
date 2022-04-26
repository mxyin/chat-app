const {body} = require("express-validator")

exports.loginRules = [
    body('email').isEmail()
]