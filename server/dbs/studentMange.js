function insertTaskInfo(id, connection, res) {
    const selectTaskSql = 'select id from tasks_card';

    connection.query(selectTaskSql, (err, result) => {
        if (err) {
            console.log(err);
            return connection.rollback(function () {
                res.json({isSaved: false});
            });
        }

        if (result.length === 0) {
            connection.commit(function (err) {
                if (err) {
                    console.log(err);
                    return connection.rollback(function () {
                        res.json({isSaved: false});
                    });
                }
                res.json({isSaved: true});
            });
        } else {
            let insertTaskInfo = `insert tasks_info (student_id, task_id) values`;
            insertTaskInfo += result.map(d => {
                return ` (${id}, ${d.id})`
            }).join(',');

            connection.query(insertTaskInfo, (err, result) => {
                if (err) {
                    console.log(err);
                    return connection.rollback(function () {
                        res.json({isSaved: false});
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        console.log(err);
                        return connection.rollback(function () {
                            res.json({isSaved: false});
                        });
                    }
                    res.json({isSaved: true});
                });
            })
        }
    })
}

function insertStudent(studentInformation, res) {
    const connection = require('./connection');
    const addSql = 'INSERT INTO student(name,school,city,team,major,gender,grade,zone)VALUES(?,?,?,?,?,?,?,?)';
    const selectWeekDetailSql = 'select id from week_detail';

    connection.beginTransaction((err) => {
        if (err) {
            res.json({isSaved: false});
        }
        connection.query(addSql, studentInformation, (err, result) => {
            if (err) {
                console.log(err);
                return connection.rollback(function () {
                    res.json({isSaved: false});
                });
            }
            const insert_total_score = `insert into total_score (student_id) values (${result.insertId})`;
            connection.query(insert_total_score, (err, data)=> {
                if (err) {
                    console.log(err);
                    return connection.rollback(function () {
                        res.json({isSaved: false});
                    });
                }
                connection.query(selectWeekDetailSql, (err, select)=> {
                    if (err) {
                        console.log(err);
                        return connection.rollback(function () {
                            res.json({isSaved: false});
                        });
                    }

                    if (select.length === 0) {
                        insertTaskInfo(result.insertId, connection, res);
                    } else {
                        let insertWeekScore = `insert week_score (student_id, week_id) values`;
                        insertWeekScore += select.map(d => {
                            return ` (${result.insertId}, ${d.id})`
                        }).join(',');
                        connection.query(insertWeekScore, (err, insert)=> {
                            if (err) {

                                console.log(err);
                                return connection.rollback(function () {
                                    res.json({isSaved: false});
                                });
                            }

                            insertTaskInfo(result.insertId, connection, res);
                        });
                    }
                });
            });
        });
    });
}

function getAllStudent(res) {
    const connection = require('./connection');
    const searchSql = 'select * from student';
    connection.query(searchSql, (err, result)=> {
        if (err) {
            throw err;
        } else {
            res.json({getAll: result});
        }
    });
}

function searchOne(name, res) {
    const connection = require('./connection');
    var searchSql;
    if (name) {
        searchSql = `SELECT * FROM student WHERE name="${name}"`
    } else {
        searchSql = `SELECT * FROM student`
    }
    connection.query(searchSql, (err, result)=> {
        if (err) {
            throw err;
        } else {
            res.json({oneStudent: result});
        }
    });
}
function modifyStudent(information, res) {
    const connection = require('./connection');
    const modifySql = `UPDATE student SET name="${information.name}",zone="${information.zone}",team="${information.team}",city="${information.city}",school="${information.school}",major="${information.major}",
    grade="${information.grade}",gender="${information.gender}" WHERE id=${information.id}`;
    connection.query(modifySql, (err, result)=> {
        if (err) {
            res.json({isModify: false});
        } else {
            res.json({isModify: true});
        }
    });
}

module.exports = {
    insertStudent,
    getAllStudent,
    searchOne,
    modifyStudent
};
