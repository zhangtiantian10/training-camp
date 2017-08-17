function createDatabase() {
    const connection = require('./connection');
    connection.query('CREATE DATABASE IF NOT EXISTS hello;', (err, result) => {
        if (err) {
            console.log(err);
        }
    });
    connection.query('create table if not exists hello.hello(h char(20))', (err, result) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = createDatabase;