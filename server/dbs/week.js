function addWeek(res, data) {
    const connection = require('./connection');

    const insetString = `insert week_detail (week_code, start_date, end_date, card_number) values ('${data.weekCode}', '${data.startDate}', '${data.endDate}', ${data.cardNumber})`;
    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return;
        }
        connection.query(insetString, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    res.json(false);
                    return;
                });
            }

            connection.query('select id from student', (err, studentIds) => {
                if (err) {
                    return connection.rollback(() => {
                        res.json(false);
                        return;
                    });
                }

                let insertScore = 'insert week_score (student_id, week_id) values';

                insertScore += studentIds.map(s => {
                    return ` (${s.id}, ${result.insertId})`
                }).join(',');

                connection.query(insertScore, (err, insertScore) => {
                    if (err) {
                        return connection.rollback(() => {
                            res.json(false);
                            return;
                        });
                    }

                    const insertWeekTotal = `ALTER TABLE total_score add \`${data.weekCode}\` DOUBLE(5,2) NULL DEFAULT '0.00' ;`;
                    connection.query(insertWeekTotal, (err, insert) => {
                        if (err) {
                            return connection.rollback(() => {
                                console.log(err);
                                res.json(false);
                                return;
                            });
                        }
                        connection.commit(function (err) {
                            if (err) {
                                return connection.rollback(function () {
                                    console.log(err);
                                    res.json(false);
                                    return;
                                });
                            }
                            res.json(true);
                        });
                    });
                });
            });
        });
    });
}

function getAllWeeks(res) {
    const connection = require('./connection');

    const selectString = `select id, week_code, DATE_FORMAT(start_date,'%Y-%m-%d') start_date, DATE_FORMAT(end_date,'%Y-%m-%d') end_date, card_number from week_detail`;
    connection.query(selectString, (err, result) => {
        if (err) {
        } else {
            res.json(result);
        }
    })
}

function modifyWeek(res, week) {
    const connection = require('./connection');

    const updateWeekDetailSql = `update week_detail set week_code='${week.weekCode}', start_date='${week.startDate}', end_date='${week.endDate}', card_number=${week.cardNumber} where id=${week.id}`;
    const updateTotalScoreSql = `ALTER TABLE total_score CHANGE COLUMN \`${week.preName}\` \`${week.weekCode}\` DOUBLE(5,2) NULL DEFAULT '0.00' ;`
    connection.beginTransaction((err) => {
        if(err) {
            res.json(false);
            return;
        }

        connection.query(updateWeekDetailSql, (err, result) => {
            if (err) {
                connection.rollback(() => {
                    res.json(false);
                });
            } else {

                connection.query(updateTotalScoreSql, (err, result) => {
                    if (err) {
                        return connection.rollback(() => {
                            res.json(false);
                        });
                    }

                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() => {
                                res.json(false);
                            });
                        }
                        res.json(true);
                    })
                })
            }
        });
    });
}

module.exports = {
    addWeek,
    getAllWeeks,
    modifyWeek
};
