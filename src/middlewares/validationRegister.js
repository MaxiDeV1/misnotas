const {body} = require('express-validator')
let register = [
    body('dni').custom(async dni => {
        const user = await db.Alumno.findOne({where: {ID_Alumno: dni}});
        if (user) {            
            throw new Error('Este DNI ya esta registrado');
        }
    },
    (req,res) => {
        res.redirect('/');
    },
    ),
    body('username').notEmpty().withMessage('Nesecita tener un nombre de usuario').bail(),
    body('email').notEmpty().withMessage('Nesecita tener una direccion de correo').bail()
    .isEmail().withMessage('Este email no es valido').bail(),
    body('password').notEmpty().withMessage('Nesecita tener una contraseña').bail()
]
module.exports = register
