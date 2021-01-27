// const { Router } = require('express');
// const Router = require('express').Router;

const express = require('express')

const router = express.Router();

const productController = require('./controllers/productController');

const aboutController = require('./controllers/aboutController')

//First option

// router.get('/', productController.index);
// router.get('/create', productController.create);

router.use('/', productController);
router.use('/about', aboutController);
router.get('*', (req, res) => {
    res.render('404', {title: 'Not Found'})
})

module.exports = router;