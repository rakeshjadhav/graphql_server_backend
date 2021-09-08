'use strict';
import mysql from 'mysql';
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'graphql_crud'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export default dbConn;
//module.exports = dbConn;