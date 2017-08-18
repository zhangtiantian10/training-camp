function addWeek(res, data) {
    const connection = require('./connection');

    const insetString = `insert week_detail (week_code, start_date, end_date, card_number) values ('${data.weekCode}', '${data.startDate}', '${data.endDate}', ${data.cardNumber})`;
    connection.query(insetString, (err, result) => {
        if (err) {
            res.json(false);
        } else {
            res.json(true);

        }
    });
}

function getAllWeeks(res) {
    const connection = require('./connection');

    const selectString = `select * from week_detail`;
    connection.query(selectString, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    addWeek,
    getAllWeeks
};
