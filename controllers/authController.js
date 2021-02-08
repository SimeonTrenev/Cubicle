// const { Router } = require('express');

// const router = Router();

const router = require('express').Router();
const authService = require('../services/authService')
const {COOKIE_NAME} = require('../config')

router.get('/login', (req, res) => { //Sprqmo /auth , tova e putq sled nego
     res.render('login')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      let token = await authService.login({username, password})
        
      res.cookie(COOKIE_NAME, token)
      res.redirect('/products')
    } catch (error) {
        console.log(error)
       res.render('login', {error})
    }
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res) => {
    // console.log(req.body)
    const { password, repeatPassword, username } = req.body; 
    
    //validate
      if(password !== repeatPassword){
        res.render('register', { message: 'Passwords missmatch!' });
        return
    }

    try {
      let user = await authService.register({username, password})

    //   console.log(result)


        res.redirect('/auth/login')
    } catch (error) {
        res.render('register', {error})
    }

    // res.redirect('/auth/register')
})

module.exports = router;