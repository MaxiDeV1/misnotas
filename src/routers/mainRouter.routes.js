// Librerias
const express = require('express'); 
const router = express.Router()

// Controlador 
const mainController = require('../controllers/mainController')

//Middlewares

router.use(express.urlencoded({extended: false}))

// Renderizado del home
router.get('/',mainController.inicio)

module.exports = router