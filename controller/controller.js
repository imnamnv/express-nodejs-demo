const db = require('../db');
const shortID = require('shortid');

module.exports.create =(req,res)=>{
    res.render('users/create');
};

module.exports.createUser = (req,res)=>{
    req.body.id = shortID.generate();
    
    db.get('user').push(req.body).write();
    console.log(res.locals.success);
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
    res.render('users/user.pug',{
        user:match,
        q : q
    })
};
module.exports.getUser =(req,res)=>{
    var id = req.params.id;
    console.log(id);
    var user = db.get('user').find({id:id}).value();
    console.log(user);
    res.render('users/detail',{
        user:user
    });
};


