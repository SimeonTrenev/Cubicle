const User = require("../models/User");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require('../config')

const register = async ({ username, password }) => {
  
    //TODO : Check if username exists
  
  
    //hash password
 
    let salt = await bcrypt.genSalt(SALT_ROUNDS);

    let hash = await bcrypt.hash(password, salt);


    const user = new User({username, password: hash});
    // console.log(user)
   return await user.save();
};

const login = async({username, password}) => {

    //get user from db

    // User.find({}).where('username').eq(username) === po-dolnoto

    let user = await User.findOne({username})

    if(!user){
        throw {message : 'Invalid user!'}
    }

    //compare password hash

    let isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw {message: 'Password does not match!'}
    }

    //generate token
    return {empty : true}

}

module.exports = {
  register,
  login,
};
