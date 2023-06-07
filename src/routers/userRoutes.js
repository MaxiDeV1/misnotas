const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const authLogin = require("../middlewares/validation.js");
const authMiddleware = require('../middlewares/autenticacionMiddleware.js')
const authRegister = require("../middlewares/validationRegister.js");
const homeAuth = require('../middlewares/homeMiddleware.js')
// renderizado y subida del login
router.post('/sesion-aceptada',userController.aceptado)
router.get("/login",homeAuth,userController.loginView);
router.post("/login",userController.login);

//renderizado del login
router.get("/notas",authLogin,authMiddleware,userController.notas);

// Renderizado de notas
router.get("/materias",authMiddleware,userController.materias);

// Renderizado de cargado de notas
router.get("/cargado", authMiddleware,userController.cargado);

// cargado de notas
router.post("/cargado",userController.cargarNota);
router.get('/')

module.exports = router;
