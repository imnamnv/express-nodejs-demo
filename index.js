const express = require('express');
const app = express();
const userRouter = require('./routers/user.routers.js');
const low =require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
const db = low(adapters);
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    res.send('Hello NodeJS');
});
//set pug
app.set('view engine', 'pug');
app.set('views','views');

app.use('/users',userRouter);











app.listen(3000);



