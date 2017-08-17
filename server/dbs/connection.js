const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "111111",
    port: "3306",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000,
    database:"trainingCamp"
});

connection.connect();

module.exports = connection;
