// Llamada de librerias
const express = require("express");
const router = express.Router();

// Middlewares
const authLogin = require("../middlewares/validation.js");
const authMiddleware = require("../middlewares/autenticacionMiddleware.js");
const authRegister = require("../middlewares/validationRegister.js");
const homeAuth = require("../middlewares/homeMiddleware.js");

//controlador
const userController = require("../controllers/userController.js");


// renderizado y subida del login
router.post("/sesion-aceptada", userController.aceptado);
router.get("/login", homeAuth, userController.loginView);
router.post("/login", userController.login);

//renderizado de notas
router.get("/notas", authLogin, userController.notas);

// Renderizado de horarios
router.get("/horarios", userController.horarios);

// Renderizado y subida de cargado de notas
router.get("/cargado", userController.cargado);
router.post("/cargado", userController.cargarNota);

// Main
router.get("/", userController.inicio);

module.exports = router;
