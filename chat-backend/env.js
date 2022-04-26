const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/config/database.js')[env];
console.log("Current environment is:", config);