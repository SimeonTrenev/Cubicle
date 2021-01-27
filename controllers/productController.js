const { Router } = require("express");
const router = Router();


//First option to routh
// const index = (req, res) => {
//   res.render("home", { layout: false });
// };

// router.get("/", index);

//Secont option to routh

router.get('/', (req, res) => {
    res.render('home', {title : 'Browse'})
})

router.get('/create', (req, res) => {
    res.render('create', {title : 'Create'})
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params)
    res.render('details', {title: 'Product Details'})
})

module.exports = router;
