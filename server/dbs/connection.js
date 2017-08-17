const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000,
    database:"hello"
});

connection.connect();

module.exports = connection;
