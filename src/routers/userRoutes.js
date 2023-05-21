const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const authLogin = require("../middlewares/validation.js");
const authRegister = require("../middlewares/validationRegister.js");

// renderizado y subida del register
router.get("/register", userController.register);
router.post("/register", userController.newUser);

// renderizado y subida del login
router.get("/login", userController.login);
router.post("/login", authLogin, userController.login);

//renderizado del login
router.get("/notas", userController.notas);

// Renderizado de notas
router.get("/materias", userController.materias);

// Renderizado de cargado de notas
router.get("/cargado", userController.cargado);

// cargado de notas
router.post("/cargado", userController.cargarNota);


module.exports = router;
