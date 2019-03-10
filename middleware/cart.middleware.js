const db = require('../db');
module.exports.addToCart =(req,res,next)=>{
    var productId;
    var sessionId = req.signedCookies.sessionId;
    var count;
    if(req.params.id){
        productId = req.params.id;
        count = db.get('sessions').find({id:sessionId}).get('cart.'+productId,0).value();
        db.get('sessions').find({id: sessionId}).set('cart.'+productId,count+1).write();
    }
    res.locals.cart = count;
    next();
};