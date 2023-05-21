const {body} = require('express-validator')
let login = [
    body('email').notEmpty().withMessage('Nesecita ingresar su correo').bail(),
    body('password').notEmpty().withMessage('Ingrese su contraseña').bail()
]
module.exports = login