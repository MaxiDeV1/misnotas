const path = require("path");
const nodemailer = require('nodemailer');
const fs = require("fs");
const { validationResult } = require("express-validator");
const usersPath = path.join(__dirname, "../database/db.json");
const userData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const Alumno = require('../database/models/alumno');
const coockie = require('cookie-parser');
const jwt = require('jsonwebtoken');
//Modelos
const db = require("../database/models/");

const userController = {};

userController.loginView = (req, res) => {
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
  !req.session.usuarioLogueado ? res.redirect('/alumnos/login') : res.render('home');
};

// Retorno de formulario de consultas
userController.consulta = (req, res) => {
  res.render("formulario-consulta");
};
userController.sendEmail = async (req, res) => {
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
  try {
    const results = validationResult(req);
    const { dni, password } = req.body;
    // Buscar el usuario en la base de datos por nombre de usuario
    const user = await db.Alumno.findOne({ where: { ID_Alumno: dni } });
    //  si el usuario no existe 
    if (results.errors.length > 0) {
      return res.render('login',{errors: results.mapped(),old: req.body})
    }else {      
      if (!user || user == null) {
        // Contraseña incorrecta
        return res.render('login',{errors: {dni: {msg: "El usuario no existe"}}, old: req.body})
      } else if (user.password != password) {
        return res.render('login',{errors: {password: {msg: 'Contrseña incorrecta'}}})
      }
      else {
        res.cookie('mi_alumno', user.Nombre, { maxAge: 1000 * 60 * 60, httpOnly: true, secure: true })
        req.session.usuarioLogueado = user;
        res.locals.usuarioSesion = user;
        // El usuario debe cambiar la contraseña
        return res.redirect(`/alumnos/`);
      }
    }

    // Comparar contraseñas


  } catch (error) {
    
    console.error("Error al comparar las contraseñas:", error);
    res.clearCookie('mi_alumno');
    return res.status(500).send("Error al comparar las contraseñas");
  }
};

module.exports = userController;
