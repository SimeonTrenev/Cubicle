const mongoose = require('mongoose')
const productsDb = require("../config/products.json");

const cubeSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength : 50,
    },
    imageUrl : {
        type: String,
        required: true,
        validate: /^https?/
    },
    difficultyLevel : {
        type: Number,
        required : true,
        min : 1,
        max : 6
    },
    accessories : {
        type : 
    }
})

class Cube {
  constructor(id, name, description, imageUrl, level) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.level = level;
  }

 

 
}

module.exports = Cube;
