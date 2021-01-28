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

function create(data) {
  let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(uniqId(), name, description, imageUrl, difficultyLevel);
  //   console.log(cube);

  productsData.push(cube);

  // console.log(path.join(__dirname + "../config/products.json"))
  // console.log(path.resolve("../config/products.json"))

  fs.writeFile(
   path.join(__dirname, "../config/products.json") ,
    JSON.stringify(productsData),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
}



module.exports = {
  create,
  getAll,
  getOne
};
