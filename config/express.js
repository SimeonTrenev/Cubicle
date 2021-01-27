const handlebars = require('express-handlebars')
const express = require('express');

function setupExpress(app){
    app.engine('hbs', handlebars({
        extname : 'hbs',
    }))
    
    app.set('view engine', 'hbs')
    
    app.use(express.static('public'))

    // app.use(bodyParser.urlencode)
    app.use(express.urlencoded({
        extended : true
    }))
}

module.exports = setupExpress

