const Cube = require("../models/Cube");
// const uniqId = require("uniqid");
// const fs = require("fs");
// const fs = require("fs/promises"); authomatic promises
// const fs = require('fs').promises // for my old version of node.js

// const path = require("path");
// const productData = require("../data/productsData");

async function getAll(query) {
  // let products = productData.getAll();

  // let products = Cube.getAll();

  let products =  await Cube.find({}).lean();

  const { search, from, to } = query;

  if (search) {
    products = products.filter((x) => x.name.toLowerCase().includes(search));
  }

  if (from) {
    products = products.filter((x) => Number(x.level) >= Number(from));
  }

  if (to) {
    products = products.filter((x) => Number(x.level) <= Number(to));
  }

  return products;
}

function getOne(id) {
  // return productsData.find((x) => x.id == id);

  // return Cube.getOne(id);
  // return productData.getOne(id)

 return Cube.findById(id).lean();
}

function create(data, callback) {
  // let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(data);
  //   console.log(cube);

  // productsData.push(cube);

  // console.log(path.join(__dirname + "../config/products.json"))
  // console.log(path.resolve("../config/products.json"))

  // fs.writeFile(
  //   path.join(__dirname, "../config/products.json"),
  //   JSON.stringify(productsData),
  //   callback
  //   // (err) => {
  //   //   if (err) {
  //   //     console.log(err);
  //   //     return;
  //   //   }

  //   //   //   callback()
  //   //   // }
  // );

  return cube.save();
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
