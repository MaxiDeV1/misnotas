async function userAuth(req, res, next) {
    try {
        const { dni } = req.body;
        console.log(dni)
        if (!dni) {
            return res.status(400).send('El campo "dni" es obligatorio.');
        }

        const user = await db.Alumno.findOne({ where: { ID_Alumno: dni } });
        if (!req.session.userAuth || !user || !user.Nombre) {
            return res.redirect('/alumnos/login');
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
}
module.exports = userAuth;