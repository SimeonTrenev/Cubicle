const { Router } = require("express");
const router = Router();


//First option to routh
// const index = (req, res) => {
//   res.render("home", { layout: false });
// };

// router.get("/", index);

//Secont option to routh

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/create', (req, res) => {
    res.render('create')
})

module.exports = router;
