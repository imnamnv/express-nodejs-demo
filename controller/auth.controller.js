const db = require('../db');

module.exports.login =(req,res)=>{
    res.render('auth/login');
};
module.exports.loginPost = (req,res)=>{
    var email = req.body.email;
    var user = db.get('user').find({email:email}).value();
    if(!user){
        res.render('auth/login',{
            errors: ['User is not exist'],
            values:req.body
        });
        return;
    }
    var password = req.body.password;
    if(user.password !== password){
        res.render('auth/login',{
            errors:['Wrong password'],
            values:req.body
        });
        return;
    }
    res.cookie('userID',user.id,{
        signed:true
    });
    res.redirect('/users');
};