const { Router } = require("express");
const router = Router();
const productService = require('../services/productService')
const accessoryService = require('../services/accessoryService')

const isAuthenticated = require('../middlewares/isAuthenticated')
const isGuest = require('../middlewares/isGuest')


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
      // console.log(products)
      res.render("home", { title: "Browse", products });
    })
    .catch(() => res.status(404).end())
  
});

router.get("/create", isAuthenticated, (req, res) => {
  res.render("create", { title: "Create" });
});

router.post("/create", isAuthenticated, validateProduct,  (req, res) => {
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
  productService.create(req.body, req.user._id)
    .then(() => res.redirect('/products'))
    .catch(() => res.status(500).end())

  
});

router.get("/details/:productId", async (req, res) => {
  // console.log(req.params.productId);
  let product = await productService.getOneWithAccessories(req.params.productId)

  res.render("details", { title: "Product Details", product });
});



router.get('/:productId/attach', isAuthenticated, async (req, res) => {
  let product = await productService.getOne(req.params.productId);
  let accessories = await accessoryService.getAllUnattached(product.accessories);

res.render('attachAccessory', {product, accessories})
})

router.post('/:productId/attach', isAuthenticated, (req, res) => {
 productService.attachAccessory(req.params.productId, req.body.accessory)
      .then(() => res.redirect(`/products/details/${req.params.productId}`))
});

router.get('/:productId/edit', isAuthenticated, (req, res) => {
  productService.getOne(req.params.productId)
      .then(product => {
        res.render('editCube', product)
      })
});

router.post('/:productId/edit', isAuthenticated, validateProduct, (req, res) => {
  productService.updateOne(req.params.productId, req.body)
      .then(response => {
        res.redirect(`/products/details/${req.params.productId}`)
      })
      .catch(error => {

      })
});

router.get('/:productId/delete', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
          if(req.user_id != product.creator){
            res.redirect('/products')
          }else{
            res.render('deleteCube', product)
          }
          
        });
});

router.post('/:productId/delete', isAuthenticated,  (req, res) => {
  productService.deleteOne(req.params.productId)
      .then(response => res.redirect('/products'))
      .catch(err => console.log(err))
})


module.exports = router;
