const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const usersPath = path.join(__dirname, "../database/db.json");
const bcrypt = require("bcryptjs");
const userData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

//Modelos
const db = require("../database/models/");

const userController = {};

userController.loginView = (req, res) => {
  req.session.aceptada = false;
  res.render("login");
};
userController.aceptado = (req, res) => {
  req.session.aceptada = true;
  req.session.save(() => {
    res.redirect("/alumnos/login");
  });
};
// Retorno del login
userController.login = async (req, res) => {
  req.session.aceptada = true;
  const { dni, password } = req.body;
  await db.Alumno.findAll({ where: {} });
  let error = validationResult(req);
  if (!error.isEmpty()) {
    return res.render("login", {
      errors: error.array(),
      old: req.body,
      log: false,
    });
  } else {
    req.session.usuarioLogueado = true;
    res.redirect("/alumnos/");
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
userController.newUser = (req, res) => {
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
};
//Retorno de horarios

userController.horarios = async (req, res) => {
  try {
    // Obtener los datos de los modelos
    const cursoHorarios = await db.CursoHorario.findAll({
      include: [db.Horario],
      order: [[db.Horario, "ID_Horario", "ASC"]], // Ordenar los horarios por ID_Horario en orden ascendente
    });

    // Obtener todos los horarios disponibles
    const horariosDisponibles = Array.from(
      new Set(
        cursoHorarios.map((cursoHorario) => cursoHorario.Horario.ID_Horario)
      )
    );

    // Obtener los horarios por día
    const horariosPorDia = {
      lunes: horariosDisponibles.filter((horario) =>
        cursoHorarios.some(
          (cursoHorario) =>
            cursoHorario.dia === "Lunes" &&
            cursoHorario.Horario.ID_Horario === horario
        )
      ),
      martes: horariosDisponibles.filter((horario) =>
        cursoHorarios.some(
          (cursoHorario) =>
            cursoHorario.dia === "martes" &&
            cursoHorario.Horario.ID_Horario === horario
        )
      ),
      miércoles: horariosDisponibles.filter((horario) =>
        cursoHorarios.some(
          (cursoHorario) =>
            cursoHorario.dia === "miércoles" &&
            cursoHorario.Horario.ID_Horario === horario
        )
      ),
      jueves: horariosDisponibles.filter((horario) =>
        cursoHorarios.some(
          (cursoHorario) =>
            cursoHorario.dia === "jueves" &&
            cursoHorario.Horario.ID_Horario === horario
        )
      ),
      viernes: horariosDisponibles.filter((horario) =>
        cursoHorarios.some(
          (cursoHorario) =>
            cursoHorario.dia === "viernes" &&
            cursoHorario.Horario.ID_Horario === horario
        )
      ),
    };

    // Renderizar la vista con los datos obtenidos
    res.render("Horarios", { horariosDisponibles, horariosPorDia });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    // Manejar el error de alguna forma apropiada
  }
};

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

userController.inicio = (req,res) => {
  res.render('home')
}
module.exports = userController;
