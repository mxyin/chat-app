const express = require("express");

const cors = require('cors')

const config = require("./config/app.js");

const app = express();

const router  = require("./router/index.js");

app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.use(express.json())

app.use(cors())
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	res.header('Access-Control-Allow-Methods', 'DELETE');
// 	next();
// });

app.use(router)

const PORT = config.appPort
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
