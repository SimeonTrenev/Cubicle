// const { Router } = require('express');
// const Router = require('express').Router;

const express = require('express')

const router = express.Router();

const productController = require('./controllers/productController');

const homeController = require('./controllers/homeController')

const accessoryController = require('./controllers/accessoryController')

const authController = require('./controllers/authController')




//First option

// router.get('/', productController.index);
// router.get('/create', productController.create);
router.use('/', homeController);
router.use('/auth', authController)
router.use('/products', productController);
router.use('/accessories', accessoryController)
router.get('*', (req, res) => {
    res.render('404', {title: 'Not Found'})
})

module.exports = router;