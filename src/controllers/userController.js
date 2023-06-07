const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const usersPath = path.join(__dirname, "../database/db.json");
const bcrypt = require("bcryptjs");
const userData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

//Modelos
const db = require("../database/models/");

//notas
const notasPath = path.join(__dirname, "../database/notas.json");
const notas = JSON.parse(fs.readFileSync(notasPath, "utf-8"));

const userController = {};
userController.loginView = (req,res) => {
  req.session.aceptada = false
  res.render('login')
}
userController.aceptado = (req,res) => {
  req.session.aceptada = true
  req.session.save(() => {
    res.redirect('/alumnos/login')
  })
}
// Retorno del login
userController.login = async (req, res) => {
  req.session.aceptada = true
  const {dni,password} = req.body
  await db.Alumno.findAll({where: {}})
  let error = validationResult(req);
  if (!error.isEmpty()) {
    return res.render("login", {errors: error.array(), old: req.body,log: false});
  } else {
    req.session.usuarioLogueado = true
    res.redirect('/alumnos/notas');
  }
};

userController.notas = async (req, res) => {
  try {
    const nota = await db.Nota.findAll({
      include: [
        {
          model: db.Materia,
          as: "materia",
        },
      ],
      limit: 14,
    });

    res.render("notas", { notasFinal: nota });
  } catch (error) {
    // Manejo de errores
  }
};

// Retorno de register
userController.register = (req, res) => {
  res.render("register", { userData });
};

// Creacion de usuarios
(userController.newUser = (req, res) => {
  let newData = {
    id: userData.length + 1,
    nombre: req.body.nombre,
    password: req.body.password,
  };
  module.exports = newData.password;
  bcrypt.hashSync(newData.password, 10);
  let newUser = { ...newData };
  userData.push(newUser);
  fs.appendFileSync(usersPath, JSON.stringify(newData), "utf-8");
  return res.redirect("/login", { userData });
}),
  //Retorno de materias
  (userController.materias = async (req, res) => {
    try {
      const materia = await db.Materia.findAll({
        include: [
          {
            model: db.Profesor,
            as: "profesor",
          },
        ],
      });

      res.render("materias", { materia });
    } catch (error) {
      // Manejo de errores
    }
  });

// Retorno de register
userController.cargado = async (req, res) => {
  const Materia = await db.Materia.findAll();

  res.render("cargar_notas", { Materia });
};

// Cargado de notas
userController.cargarNota = async (req, res) => {
  try {
    const { ID_Alumno, ID_Materia, Nota } = req.body;

    // Realizar la creación de la nota en la base de datos
    const nota = await db.Nota.create({
      ID_Alumno,
      ID_Materia,
      Nota,
    });

    res.send("Nota cargada exitosamente");
  } catch (error) {
    res.send("Error al cargar la nota");
  }
};
module.exports = userController;
