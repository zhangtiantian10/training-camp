function insertStudent(studentInformation, res) {
    const connection = require('./connection');
    const addSql = 'INSERT INTO student(name,school,city,team,major,gender,grade,zone)VALUES(?,?,?,?,?,?,?,?)';
    const selectString = 'select student.id as studentId,week_detail.id as weekId from student, week_detail';
    connection.query(addSql, studentInformation, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            connection.query(selectString,(err,result)=>{
                var insertWeekScore=`insert week_score(student_id,week_id) values`;
                insertWeekScore =insertWeekScore+ result.map(d => {
                    return ` (${d.studentId}, ${d.weekId})`
                }).join(',');

                connection.query(insertWeekScore,(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("true");
                        res.json({isSaved: true});
                    }
                });
            });
        }
    });
}

function getAllStudent(res) {
    const connection = require('./connection');
    const searchSql = 'select * from student';
    connection.query(searchSql, (err, result)=> {
        if (err) {
            console.log(err);
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
            console.log(err);
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
            console.log(err);
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
            console.log(err);
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
