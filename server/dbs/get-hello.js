function getHello(res) {
    const connection = require('./connection');

    connection.query("select * from hello", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.length === 0) {
                res.json('');
            } else
                res.json(result[0].h);
        }
    });
}

module.exports = {
    getHello,
};
