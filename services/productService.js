const Cube = require("../models/Cube");
const uniqId = require("uniqid");



function create(data) {
  let { name, description, imageUrl, difficultyLevel } = data;

  let cube = new Cube(uniqId(), name, description, imageUrl, difficultyLevel);
//   console.log(cube);
}


module.exports = {
    create
}