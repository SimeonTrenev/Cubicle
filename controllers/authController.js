// const { Router } = require('express');

// const router = Router();

const router = require('express').Router();
const authService = require('../services/authService')
const {COOKIE_NAME} = require('../config')

const isGuest = require('../middlewares/isGuest')
const isAuthenticated = require('../middlewares/isAuthenticated')


router.get('/login', isGuest, (req, res) => { //Sprqmo /auth , tova e putq sled nego
     res.render('login')
})

router.post('/login', isGuest, async (req, res) => {
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

router.get('/register', isGuest, (req, res) => {
    res.render('register')
})

router.post('/register', isGuest, async (req, res) => {
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
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.redirect('/products')
})

module.exports = router;