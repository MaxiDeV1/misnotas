const express = require('express'); 
const router = express.Router()
const mainController = require('../controllers/mainController')
router.use(express.urlencoded({extended: false}))

// Renderizado del home
router.get('/',mainController.inicio)

module.exports = router