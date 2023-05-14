const {check} = require('express-validator')
let login = [
    check('email').notEmpty().withMessage('Nesecita ingresar su correo').bail(),
    check('password').notEmpty().withMessage('Ingrese su contraseña').bail()
]
module.exports = login