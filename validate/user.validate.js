module.exports.validateUser = (req,res,next)=>{
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
    res.locals.success = "Success";
    next();
}