const express = require('express'); 
const router = express.Router()
const userController = require('../controllers/mainController')
router.use(express.urlencoded({extended: false}))
router.get('/',userController.inicio)
module.exports = router