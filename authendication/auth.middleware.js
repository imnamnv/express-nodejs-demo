var db = require('../db');
module.exports.requireAuth = (req,res,next)=>{
    if(!req.cookies.userID){
        res.redirect('/auth/login');
        return;
    }
    var user = db.get('users').filter({id:req.cookies.userID}).value();
    if(!user){
        res.redirect('auth/login');
        return;
    }
    next();
};