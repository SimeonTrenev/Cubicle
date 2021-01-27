const express = require('express');
const expressConfig = require('./config/express')
const app = express();
const config = require('./config/config')

expressConfig(app);
//require('./config/express')(app);


// console.log(process.env.NODE_ENV)
app.get('/', (req, res) => {
    
    res.render('home', {layout : false})
})

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}...`))