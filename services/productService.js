const Cube = require("../models/Cube");
const uniqId = require("uniqid");
const fs = require('fs')
let productsData = require('../config/products.json')

function getAll(){
  return productsData;
}


function create(data) {
  let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(uniqId(), name, description, imageUrl, difficultyLevel);
//   console.log(cube);
 

productsData.push(cube)

fs.writeFile(__dirname +  '/../config/products.json', JSON.stringify(productsData), (err) => {
  if(err){
    console.log(err)
    return;
  }


})
}

// function validateCube(data){
//   if(data.name.length < 2){
//     return;
//   }

//   if(data.description.length < 5){
//     return;
//   }

//   if(!data.imageUrl){
//     return
//   }

  
// }


module.exports = {
    create,
    getAll
}