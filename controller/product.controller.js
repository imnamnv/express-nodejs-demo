const db = require('../db');
module.exports.product = (req, res) => {
    var count;
    if(res.locals.cart>=0) {
        count = res.locals.cart.toString();
    }
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var product = db.get('product').value().slice(start, end);
    res.render('product/product', {
        product: product,
        page: page,
        cart: count
    });
}