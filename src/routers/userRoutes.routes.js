// Llamada de librerias
const express = require("express");
const router = express.Router();

// Middlewares
const authLogin = require("../middlewares/validation.js");
const authMiddleware = require("../middlewares/autenticacionMiddleware.js");
const authRegister = require("../middlewares/validationRegister.js");
const homeAuth = require("../middlewares/homeMiddleware.js");
const userAuth = require('../middlewares/userAuthMiddleware.js')
//controlador
const userController = require("../controllers/userController.js");
// renderizado y subida del login
router.post("/sesion-aceptada", userController.aceptado);
router.get("/login",authLogin,homeAuth, userController.loginView);
router.post("/login",userController.login);
router.post('/sendEmail',userController.sendEmail)
//renderizado de notas
router.get("/notas", authLogin, userController.notas);

// Renderizado de horarios
router.get("/horarios", authLogin,userController.horarios);

// Renderizado y subida de cargado de notas
router.get("/cargado", userController.cargado);
router.post("/cargado", userController.cargarNota);

// Main
router.get("/:username", authLogin,userController.inicio);

// Main
router.get("/consultas", userController.consulta);

module.exports = router;
