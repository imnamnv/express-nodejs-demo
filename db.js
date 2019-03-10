const low =require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
const db = low(adapters);
db.defaults({user:[], sessions:[]}).write();

module.exports = db;