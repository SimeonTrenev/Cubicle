const express = require('express');
const expressConfig = require('./config/express')
const app = express();
const config = require('./config/config')
const routes = require('./routes')

expressConfig(app);
//require('./config/express')(app);

app.use(routes)

// console.log(process.env.NODE_ENV)


app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}...`))