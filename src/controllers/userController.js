const path = require("path");
const nodemailer = require('nodemailer');
const fs = require("fs");
const { validationResult } = require("express-validator");
const usersPath = path.join(__dirname, "../database/db.json");
const bcrypt = require('bcryptjs');
const userData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const Alumno = require('../database/models/alumno');
//Modelos
const db = require("../database/models/");

const userController = {};

userController.loginView = (req, res) => {
  req.session.aceptada = true;
  res.render("login");
};

userController.aceptado = (req, res) => {
  req.session.aceptada = true;
  req.session.save(() => {
    res.redirect("/alumnos/login");
  });
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

// Retorno del home
userController.inicio = (req, res) => {
  res.render("home");
};

// Retorno de formulario de consultas
userController.consulta = (req, res) => {
  res.render("formulario-consulta");
};
userController.sendEmail = async (req,res) => {
  const { nombre, ocupacion, telefono, email, formulario } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'maximovelasquez411@gmail.com',
        pass: '$maxpro199',
      },
    });

    await transporter.sendMail({
      from: `"${nombre}" "${email}"`,
      to: 'retr0velasquez@gmail.com',
      subject: 'escuela',
      text: formulario,
    });

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocurrió un error al enviar el correo' });
  }
}

// Proceso de login

userController.login = async (req, res) => {
  req.session.usuarioLogueado = true
  try {
    const { dni, password } = req.body;

    // Buscar el usuario en la base de datos por nombre de usuario
    const user = await db.Alumno.findOne({ where: { ID_Alumno: dni} });

    if (!user) {
      // Usuario no encontrado
      return res.status(401).send("Usuario no encontrado");
    }

    // Comparar contraseñas

    const passwordMatch = await db.Alumno.findOne({password: user.password});

    if (!passwordMatch) {
      // Contraseña incorrecta
      return res.status(401).send("Contraseña incorrecta");
    } else {
      // El usuario debe cambiar la contraseña
      return res.redirect("/alumnos");
    }

  } catch (error) {
    console.error("Error al comparar las contraseñas:", error);
    return res.status(500).send("Error al comparar las contraseñas");
  }
};

module.exports = userController;
