require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/user.routers.js');
const authRouth = require('./routers/auth.routh');
const loginAuth = require('./middleware/auth.middleware');
const productRouter = require('./routers/product.routers');
const cookiesParser = require('cookie-parser');
const sessionMiddleware = require('./middleware/session.middleware');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const low =require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
const db = low(adapters);
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookiesParser(process.env.SESSION_SECRET));
app.use(express.static('public'));
app.use(sessionMiddleware);

//set pug
app.set('view engine', 'pug');
app.set('views','views');

app.use('/users',loginAuth.requireAuth,userRouter);
app.use('/product',productRouter);
app.use('/auth',authRouth);
app.listen(3000);



