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
    if (information.upgrade_date === '') {
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

    let selectSql = `select a.id, a.student_id,a.task_id,DATE_FORMAT(finished_date,'%Y-%m-%d') finished_date,DATE_FORMAT(a.review_date,'%Y-%m-%d') review_date,a.review_grade,DATE_FORMAT(a.upgrade_date,'%Y-%m-%d') upgrade_date,a.upgrade_grade, b.name as student_name,c.name as task_name
 from tasks_info a,student b,tasks_card c
 where a.student_id=b.id and a.task_id=c.id and student_id=${information.studentId}`;
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

function selectStudents(res, info) {
    const connection = require('./connection');

    const selectSql = `select id, name from student where zone='${info.zone}' and team='${info.team}'`;

    connection.query(selectSql, (err, result) => {
        if (err) {
            console.log(err);
            res.json(false);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    selectAllTaskcard,
    modifyTask,
    filterTask,
    selectStudents
};