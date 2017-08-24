function selectAllTaskcard(res) {
    const connection = require('./connection');
    const selectSql = ` select a.id, a.student_id,a.task_id,DATE_FORMAT(finished_date,'%Y-%m-%d') finished_date,DATE_FORMAT(a.review_date,'%Y-%m-%d') review_date,a.review_grade,DATE_FORMAT(a.upgrade_date,'%Y-%m-%d') upgrade_date,a.upgrade_grade, b.name as student_name,c.name as task_name
 from tasks_info a,student b,tasks_card c
 where a.student_id=b.id and a.task_id=c.id`;
    connection.query(selectSql, (err, result)=> {
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }
        res.json({data: result});
    });
}

function modifyTask(information, res) {
    const connection = require('./connection');
    let updateSql = 'UPDATE tasks_info SET';
    if(information.upgrade_date === '') {
        updateSql += ` finished_date="${information.finished_date}", review_date="${information.review_date}", review_grade="${information.review_grade}" WHERE id=${information.taskInfo_id}`;
    } else {
        updateSql += ` finished_date="${information.finished_date}", review_date="${information.review_date}", review_grade="${information.review_grade}", upgrade_date="${information.upgrade_date}", upgrade_grade="${information.upgrade_grade}" WHERE id=${information.taskInfo_id}`;
    }

    connection.query(updateSql, (err, result)=> {
        if (err) {
            console.log(err);
            res.json({isUpdate: false});
            return;
        }
        res.json({isUpdate: true});
    });
}

function filterTask(information, res) {
    const connection = require('./connection');

    connection.beginTransaction((err) => {
        if (err) {
            console.log(err);
            res.json({isFind: false});
            return;
        }

        let filterSql = `select id from student where zone="${information.zone}" and team="${information.team}" and name="${information.studentName}"`;
        connection.query(filterSql, (err, result)=> {
            if (err) {
                return connection.rollback(function () {
                    console.log(err);
                    res.json({isFind: false});
                });
            }

            if (result.length === 0) {
                res.json({isFind: false});
            } else {

                let studentId = result[0].id;
                let selectSql = `select a.id, a.student_id,a.task_id,DATE_FORMAT(finished_date,'%Y-%m-%d') finished_date,DATE_FORMAT(a.review_date,'%Y-%m-%d') review_date,a.review_grade,DATE_FORMAT(a.upgrade_date,'%Y-%m-%d') upgrade_date,a.upgrade_grade, b.name as student_name,c.name as task_name
 from tasks_info a,student b,tasks_card c
 where a.student_id=b.id and a.task_id=c.id and student_id=${studentId}`;
                connection.query(selectSql, (err, data)=> {
                    if (err) {
                        return connection.rollback(function () {
                            console.log(err);
                            res.json({isFind: false});
                        });
                    }
                    if (data.length != 0) {
                        res.json({isFind: true, tasks: data});
                    } else {
                        res.json({isFind: false});
                    }
                });
            }
        });
    });
}

function getAllZone(res) {
    const connection = require('./connection');
    let selectSql=`select zone from student`;
    connection.query(selectSql,(err,result)=>{
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }
        let newArray=[];
        for(let value of result){
            newArray.push(value.zone);
        }
        newArray=Array.from(new Set(newArray));
        res.json({data:newArray});
    });
}

module.exports = {
    selectAllTaskcard,
    modifyTask,
    filterTask,
    getAllZone
};