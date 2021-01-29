const Cube = require("../models/Cube");
const uniqId = require("uniqid");
const fs = require("fs");
// const fs = require("fs/promises"); authomatic promises
// const fs = require('fs').promises // for my old version of node.js

let productsData = require("../config/products.json");
const path = require("path");

function getAll(query) {
  let result = productsData;

  if(query.search){
    result = result.filter(x => x.name.toLowerCase().includes(query.search))
  }

  if(query.from){
    result = result.filter(x => Number(x.level) >= Number(query.from))
  }

  if(query.to){
    result = result.filter(x => Number(x.level) <= Number(query.to))
  }

  return result;
}

function getOne(id) {
  return productsData.find((x) => x.id == id);
}

function create(data, callback) {
  let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(uniqId(), name, description, imageUrl, difficultyLevel);
  //   console.log(cube);

  productsData.push(cube);

  // console.log(path.join(__dirname + "../config/products.json"))
  // console.log(path.resolve("../config/products.json"))

  fs.writeFile(
    path.join(__dirname, "../config/products.json"),
    JSON.stringify(productsData),
    callback
    // (err) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }

    //   //   callback()
    //   // }
  );

  //Promise authomatic
  //  return fs.writeFile(path.join(__dirname, "../config/products.json") ,
  //   JSON.stringify(productsData),
  //   )
}

module.exports = {
  create,
  getAll,
  getOne,
};
