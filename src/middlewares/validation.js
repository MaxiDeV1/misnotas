const {body} = require('express-validator')
let login = [
    body('dni').notEmpty().withMessage('Nesecita ingresar su correo').bail(),
    body('password').notEmpty().withMessage('Ingrese su contraseña').bail(),
    body('dni').custom(function (value,{req}) {
        if (req.body.dni > 8) {
            throw new Error('El numero no puede ser mayor que 8 digitos')
        }
        return true
    })
]
module.exports = login