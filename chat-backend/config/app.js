require("dotenv").config()

//exports app environment variables
module.exports = {
    appKey: process.env.APP_KEY,
    appUrl: process.env.APP_URL,
    appPort: process.env.APP_PORT,
}