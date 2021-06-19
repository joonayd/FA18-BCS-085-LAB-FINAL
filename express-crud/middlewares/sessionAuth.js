function sessionAuth(req,res,next){
    res.locals.user = req.sessioni.user
    next()
}
module.exports = sessionAuth