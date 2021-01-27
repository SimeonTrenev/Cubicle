const handlebars = require('express-handlebars')
const express = require('express');

function setupExpress(app){
    app.engine('hbs', handlebars({
        extname : 'hbs',
    }))
    
    app.set('view engine', 'hbs')
    
    app.use(express.static('public'))
}

module.exports = setupExpress

