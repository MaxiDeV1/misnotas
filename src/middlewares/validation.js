const { body, validationResult } = require('express-validator');
const Alumno = require('../database/models/alumno')
let login = [
    body('password').custom(async (value, { req }) => {
        const { password, dni } = req.body;
        const user = await Alumno.findOne({where: {ID_Alumno: dni}});
        if (user.ID_Alumno != dni) {
            throw new Error('El usuario no existe');
        } else if (user.password != password) {
            
        }
    }),(req,res) => {
        const results = validationResult(req);
        res.render('login',{errors: results.mapped(),old: req.body})
    }
]
module.exports = login