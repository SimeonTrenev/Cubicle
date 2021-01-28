const { Router } = require("express");
const router = Router();
const productService = require('../services/productService')
// const helpers = require('./helpers/productHelpers')
const { validateProduct } = require('./helpers/productHelpers')

//First option to routh
// const index = (req, res) => {
//   res.render("home", { layout: false });
// };

// router.get("/", index);

//Secont option to routh

router.get("/", (req, res) => {
  let products = productService.getAll()
  res.render("home", { title: "Browse", products });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

router.post("/create", validateProduct,  (req, res) => {
  // console.log(req.body)

  //TODO : Validate inputs

  productService.create(req.body, (err) => {
    if(err){
      return res.status(500).end();
    }

    res.redirect("/products");
  })
  // productService.validateCube(req.body)

  
});

router.get("/details/:productId", (req, res) => {
  console.log(req.params.productId);
  let product = productService.getOne(req.params.productId)

  res.render("details", { title: "Product Details", product });
});




module.exports = router;
