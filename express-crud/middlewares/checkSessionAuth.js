function checkSessionAuth(req,res,next){
    if (req.sessioni.user) next()
    else return res.redirect("/login")
}
module.exports = checkSessionAuth