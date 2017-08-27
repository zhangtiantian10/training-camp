function addWeek(res, data) {
    const connection = require('./connection');

    const selectWeekCodeSql = `select * from week_detail where week_code='${data.weekCode}'`;
    const insetString = `insert week_detail (week_code, start_date, end_date, card_number) values ('${data.weekCode}', '${data.startDate}', '${data.endDate}', ${data.cardNumber})`;
    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return;
        }
        connection.query(selectWeekCodeSql, (err, week) => {
            if (err) {
                console.log(err);
                return connection.rollback(() => {
                    res.json(false);
                    return;
                });
            } else if (week.length === 0) {
                connection.query(insetString, (err, result) => {
                    if (err) {
                        console.log(err);
                        return connection.rollback(() => {
                            res.json(false);
                            return;
                        });
                    }
                    const insertWeekTotal = `ALTER TABLE total_score add \`${data.weekCode}\` DOUBLE(5,2) NULL DEFAULT '0.00' ;`;
                    connection.query(insertWeekTotal, (err, insert) => {
                        if (err) {
                            console.log(err);
                            return connection.rollback(() => {
                                console.log(err);
                                res.json(false);
                                return;
                            });
                        }

                        connection.query('select id from student', (err, studentIds) => {
                            if (err) {
                                console.log(err);
                                return connection.rollback(() => {
                                    res.json(false);
                                    return;
                                });
                            }

                            if (studentIds.length === 0) {
                                connection.commit(function (err) {
                                    if (err) {
                                        console.log(err);
                                        return connection.rollback(function () {
                                            console.log(err);
                                            res.json(false);
                                            return;
                                        });
                                    }
                                    res.json(true);
                                });
                                return ;
                            }
                            let insertScore = 'insert week_score (student_id, week_id) values';

                            insertScore += studentIds.map(s => {
                                return ` (${s.id}, ${result.insertId})`
                            }).join(',');

                            connection.query(insertScore, (err, insertScore) => {
                                if (err) {
                                    console.log(err);
                                    return connection.rollback(() => {
                                        res.json(false);
                                        return;
                                    });
                                }
                                connection.commit(function (err) {
                                    if (err) {
                                        console.log(err);
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
            } else {
                connection.commit(function (err) {
                    if (err) {
                        console.log(err);
                        return connection.rollback(function () {
                            console.log(err);
                            res.json(false);
                            return;
                        });
                    }
                    res.json(false);
                });
            }
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
        if (err) {
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
                        console.log(err);
                        return connection.rollback(() => {
                            res.json(false);
                        });
                    }

                    connection.commit((err) => {
                        if (err) {
                            console.log(err);
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
