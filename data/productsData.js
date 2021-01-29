const fs = require("fs");
const path = require("path").promises;
const productsDb = require("../config/products.json");

module.exports = {

    getAll(){
        return productsDb
    },

    getOne(id){
        return productsDb.find(x => x.id == id)
    },

  create(product) {
    productsDb.push(product);

    return fs.writeFile(
      path.join(__dirname, "../config/products.json"),
      JSON.stringify(productsDb)
    );
  },
};
