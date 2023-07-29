const db = require("../database/models");
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const controller = {
    registro: (req, res) => {
        let errors = validationResult(req);
        if (errors.length > 1) {
            return res.render('register', { errors })
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
            const hashedPassword = await bcrypt.hash(password, 8);

            // Guardar el usuario en la base de datos
            const newUser = await db.Alumno.create({
                ID_Alumno: dni,
                Nombre: nombre,
                Apellido: apellido,
                Edad: edad,
                ID_Curso: idCurso,
                Ciclo_Lectivo: cicloLectivo,
                Orientacion: orientacion,
                password: hashedPassword
            });

            if (newUser) {
                res.redirect(("login"))
            }

        } catch (error) {
            console.error("Error al guardar el usuario:", error);
            return res.status(500).send("Error al guardar el usuario");
        }
    }

}
module.exports = controller;