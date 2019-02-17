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
    match = db.get('user').value();
    res.render('users/user.pug',{
        user:match
    })
};


