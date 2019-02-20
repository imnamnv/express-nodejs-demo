const db = require('../db');
const shortID = require('shortid');

module.exports.create =(req,res)=>{
    res.render('users/create');
};

module.exports.createUser = (req,res)=>{
    req.body.id = shortID.generate(); 
    db.get('user').push(req.body).write();
    res.redirect('/users');
};
module.exports.listUser =(req,res)=>{
    var q = req.query.q;
    var match = db.get('user').value().filter((user)=>{
        return user.name.indexOf(q)!==-1;
    });
    if(q==null){
        match = db.get('user').value();
    }
    var x = res.locals.user;
    res.render('users/user.pug',{
        user:match,
        q : q
    })
};
module.exports.getUser =(req,res)=>{
    var id = req.params.id;
    var user = db.get('user').find({id:id}).value();
    res.render('users/detail',{
        user:user
    });
};


