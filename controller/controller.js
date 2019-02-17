const db = require('../db');
const shortID = require('shortid');

module.exports.create =(req,res)=>{
    res.render('users/create');
};

module.exports.createUser = (req,res)=>{
    req.body.id = shortID.generate();
    var errors =[];
    if(!req.body.name){
        errors.push('Name is null');
    }
    if(!req.body.phone){
        errors.push('Phone is null');
    }
    if(errors.length>0){
        res.render('users/create',{
            errors:errors,
            values:req.body
        });
        return;
    }
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


