const {Router} = require('express');

const accessoryService = require('../services/accessoryService')

const router = Router();

router.get('/create', (req, res) => {
    res.render('createAccessory')
});

//TODO: Create validation middleware or just validate incoming data
router.post('/create', (req, res) => {
    // console.log(req.body)

    accessoryService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(err => res.status(404).end())

    res.redirect('/products');
})

module.exports = router;