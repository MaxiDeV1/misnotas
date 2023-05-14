const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController.js')
const authLogin = require('../middlewares/validation.js')
const authRegister = require('../middlewares/validationRegister.js')
router.get('/register',userController.register)
router.post('/register',userController.newUser)
router.get('/login',userController.login)
router.post('/login',authLogin,userController.login)
router.get('/notas',userController.tabla)
module.exports = router