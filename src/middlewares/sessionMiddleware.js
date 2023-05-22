function sessionMiddleware(req,res,next) {
    if (req.session.usuarioLogueado) {
        console.log(req.session.usuarioLogueado);
        return res.redirect('/alumnos/notas')
    }
    next()
}
module.exports = sessionMiddleware