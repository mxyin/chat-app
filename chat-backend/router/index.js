const router = require('express').Router()

router.get("/home", (req, res) => {
    return res.send("Home screen");
})

//middleware, uses "/" and requires more specific routes
router.use("/", require("./auth.js"))
router.use("/users", require("./user.js"))
//exports router to main index.js
module.exports = router
