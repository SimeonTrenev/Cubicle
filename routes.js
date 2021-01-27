// const { Router } = require('express');
// const Router = require('express').Router;

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {layout : false})
})

module.exports = router;