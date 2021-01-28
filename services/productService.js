const Cube = require("../models/Cube");
const uniqId = require("uniqid");
const fs = require("fs");
let productsData = require("../config/products.json");
const path = require('path')

function getAll() {
  return productsData;
}

function getOne(id) {
  return productsData.find(x => x.id == id)
}

function create(data, callback) {
  let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(uniqId(), name, description, imageUrl, difficultyLevel);
  //   console.log(cube);

  productsData.push(cube);

  // console.log(path.join(__dirname + "../config/products.json"))
  // console.log(path.resolve("../config/products.json"))

  fs.writeFile(
   path.join(__dirname, "../config/products.json") ,
    JSON.stringify(productsData),
    callback
    // (err) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }

    //   callback()
    // }
  );
}



module.exports = {
  create,
  getAll,
  getOne
};
