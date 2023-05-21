function autenticacionMiddleware(req,res,next) {
    if (!req.session.usuarioLogueado) {
        return res.redirect('/alumnos/login')
    }
    next()
}
module.exports = autenticacionMiddleware