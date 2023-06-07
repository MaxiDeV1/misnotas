function homeMiddleware(req,res,next) {
    if (!req.session.aceptada) {
        return res.redirect('/') 
    } 
    next()
}
module.exports = homeMiddleware