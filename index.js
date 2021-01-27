const express = require('express');
const app = express();
const config = require('./config/config')

console.log(process.env.NODE_ENV)

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}...`))