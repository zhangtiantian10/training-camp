function getStudentScore(res, data) {
    const connection = require('./connection');

    const selectString = `select id, name from student where zone='${data.zone}' and team='${data.team}'`;
    connection.query(selectString, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    getStudentScore
};