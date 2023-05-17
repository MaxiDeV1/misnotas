const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController.js')
const authLogin = require('../middlewares/validation.js')
const authRegister = require('../middlewares/validationRegister.js')

// renderizado y subida del register
router.get('/register',userController.register)
router.post('/register',userController.newUser)

// renderizado y subida del login
router.get('/login',userController.login)
router.post('/login',authLogin,userController.login)

//renderizado del login
router.get('/notas',userController.tabla)
module.exports = router