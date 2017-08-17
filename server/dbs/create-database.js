function createDatabase() {
    const connection = require('./connection');

    connection.query("create table if not exists hello(h char(20) default 'hello')", (err, result) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = createDatabase;