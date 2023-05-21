function sessionMiddleware(req,res,next) {
    if (req.session.usuarioLogueado) {
        return res.redirect('/alumnos/perfil')
    }
    next()
}
module.exports = sessionMiddleware