function insertStudent(studentInformation, res) {
    const connection = require('./connection');
    const addSql = 'INSERT INTO student(name,school,city,team,major,gender,grade,zone)VALUES(?,?,?,?,?,?,?,?)';
    const selectString = 'select id from week_detail';
    connection.beginTransaction((err) => {
        if (err) {
            res.json({isSaved: false});
            return;
        }
        connection.query(addSql, studentInformation, (err, result) => {
            if (err) {
                return connection.rollback(function () {
                    res.json({isSaved: false});
                    return;
                });
            }
            const insert_total_score = `insert into total_score (student_id) values (${result.insertId})`;

            console.log(insert_total_score);
            connection.query(selectString, (err, select)=> {
                if (err) {
                    return connection.rollback(function () {
                        res.json({isSaved: false});
                        return;
                    });
                }
                let insertWeekScore = `insert week_score (student_id, week_id) values`;
                insertWeekScore += select.map(d => {
                    return ` (${result.insertId}, ${d.id})`
                }).join(',');
                connection.query(insertWeekScore, (err, insert)=> {
                    if (err) {
                        return connection.rollback(function () {
                            res.json({isSaved: false});
                            return;
                        });
                    }

                    connection.query(insert_total_score, (err, data)=> {
                        if (err) {
                            return connection.rollback(function () {
                                res.json({isSaved: false});
                                return;
                            });
                        }
                        connection.commit(function (err) {
                            if (err) {
                                return connection.rollback(function () {
                                    res.json({isSaved: false});
                                    return;
                                });
                            }
                            res.json({isSaved: true});
                        });
                    });
                });
            });
        });
    });
}

function getAllStudent(res) {
    const connection = require('./connection');
    const searchSql = 'select * from student';
    connection.query(searchSql, (err, result)=> {
        console.log(result);
        if (err) {
            throw err;
        } else {
            res.json({getAll: result});
        }
    });
}

function removeStudent(id, res) {
    const connection = require('./connection');
    const removeSql = `DELETE FROM student where id=${id}`;
    connection.query(removeSql, (err, result)=> {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                res.json({isRemoved: false});
            } else {
                res.json({isRemoved: true});
            }
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
    removeStudent,
    searchOne,
    modifyStudent
};
