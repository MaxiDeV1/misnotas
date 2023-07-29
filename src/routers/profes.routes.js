const express = require('express');
const router = express.Router();
const controller = require('../controllers/profesController.js');
// Register
router.post("/register", controller.guardar);
router.get("/register", controller.registro);
module.exports = router;