const { Router } = require("express");
const router = Router();
const productService = require('../services/productService')
const accessoryService = require('../services/accessoryService')


// const helpers = require('./helpers/productHelpers')
const { validateProduct } = require('./helpers/productHelpers')

//First option to routh
// const index = (req, res) => {
//   res.render("home", { layout: false });
// };

// router.get("/", index);

//Secont option to routh

router.get("/", (req, res) => {

  // console.log(req.query)

  productService.getAll(req.query)
    .then(products => {
      console.log(products)
      res.render("home", { title: "Browse", products });
    })
    .catch(() => res.status(404).end())
  
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

router.post("/create", validateProduct,  (req, res) => {
  // console.log(req.body)

  //TODO : Validate inputs

  // productService.create(req.body, (err) => {
  //   if(err){
  //     return res.status(500).end();
  //   }

  //   res.redirect("/products");
  // })

  // productService.validateCube(req.body)

  //if we use authomatic promises
  productService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(() => res.status(500).end())

  
});

router.get("/details/:productId", async (req, res) => {
  // console.log(req.params.productId);
  let product = await productService.getOneWithAccessories(req.params.productId)

  res.render("details", { title: "Product Details", product });
});



router.get('/:productId/attach', async (req, res) => {
  let product = await productService.getOne(req.params.productId);
  let accessories = await accessoryService.getAllUnattached(product.accessories);

res.render('attachAccessory', {product, accessories})
})

router.post('/:productId/attach', (req, res) => {
 productService.attachAccessory(req.params.productId, req.body.accessory)
      .then(() => res.redirect(`/products/details/${req.params.productId}`))
})


module.exports = router;
