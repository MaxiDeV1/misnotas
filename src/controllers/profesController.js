const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

const controller = {
  registro: (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('register', { errors: errors.array() });
    }
    res.render("register");
  },

  guardar: async (req, res) => {
    try {
      const { dni, nombre, apellido, edad, idCurso, cicloLectivo, orientacion, password } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await db.Alumno.findOne({ where: { ID_Alumno: dni } });

      if (existingUser) {
        return res.status(409).send("El usuario ya existe");
      }

      // Generar el hash de la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Generar el token para el usuario
      // Guardar el usuario en la base de datos junto con el token
      const newUser = await db.Alumno.create({
        ID_Alumno: dni,
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
        ID_Curso: idCurso,
        Ciclo_Lectivo: cicloLectivo,
        Orientacion: orientacion,
        password: hashedPassword,
        token: token // Aquí se guarda el token en la columna 'token' de la tabla 'Alumno'
      });

      if (!newUser) {
        return res.status(500).send("Error al guardar el usuario");
      }

      // Redirigir al usuario al home con el token en la URL
      res.redirect(`/home/${token}`);

    } catch (error) {
      console.error("Error al guardar el usuario:", error);
      return res.status(500).send("Error al guardar el usuario");
    }
  }
};

module.exports = controller;