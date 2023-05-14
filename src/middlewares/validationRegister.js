const {body} = require('express-validator')
let register = [
    body('username').notEmpty().withMessage('Nesecita tener un nombre de usuario').bail(),
    body('email').notEmpty().withMessage('Nesecita tener una direccion de correo').bail()
    .isEmail().withMessage('Este email no es valido').bail(),
    body('password').notEmpty().withMessage('Nesecita tener una contraseña').bail()
]
module.exports = register
