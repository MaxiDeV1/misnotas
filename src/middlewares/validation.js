const {body} = require('express-validator');
const db = require('../database/models')
let login = [
    body('password').notEmpty().withMessage('Ingrese su contraseña').bail(),
]
module.exports = login