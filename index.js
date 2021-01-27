const express = require('express');
const handlebars = require('express-handlebars')
const app = express();
const config = require('./config/config')

app.engine('hbs', handlebars({
    extname : 'hbs',
}))
// console.log(process.env.NODE_ENV)
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    
    res.render('home', {layout : false})
})

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}...`))