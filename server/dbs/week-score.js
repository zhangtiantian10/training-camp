function countTaskScore(weekScores, grades, number) {

    return weekScores.map(weekScore => {
        const taskScore = grades.reduce((p, n) => {
            if(n.studentId === weekScore.student_id) {
                return p + parseInt(n.grade);
            }

            return p;
        }, 0);


        weekScore.total_score = weekScore.total_score - weekScore.task_card;
        weekScore.task_card = parseFloat((taskScore / (number * 10) * 60).toFixed(2));
        weekScore.total_score = weekScore.total_score + weekScore.task_card;

        return weekScore;
    });
}

function getStudentScore(res, data) {
    const connection = require('./connection');

    connection.beginTransaction((err) => {
        if (err) {
            console.log(err);
            res.json(false);
            return;
        }

        connection.query(`select name from student where zone='${data.zone}' and team='${data.team}'`, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    console.log(err);
                    res.json(false);
                });
            }

            connection.query(`select * from week_score where student_id in (select id from student where zone='${data.zone}' and team='${data.team}') && week_id=${data.weekId}`, (err, weekScores) => {
                if (err) {
                    return connection.rollback(() => {
                        console.log(err);
                        res.json(false);
                    });
                }

                if(weekScores.length === 0) {
                    connection.commit(function (err) {
                        if (err) {
                            return connection.rollback(function () {
                                console.log(err);
                                res.json(false);
                            });
                        }
                        res.json({students: result, weekScores});
                    });

                    return;
                }

                const studentId = weekScores.map(w => {
                    return w.student_id;
                }).join(',');
                const selectTaskInfoSql = `select student_id as studentId, review_grade as grade from tasks_info where review_date between '${data.startTime}' and '${data.endTime}' and student_id in (${studentId})`;

                connection.query(selectTaskInfoSql, (err, grades) => {
                    if (err) {
                        return connection.rollback(() => {
                            console.log(err);
                            res.json(false);
                        });
                    }

                    weekScores = countTaskScore(weekScores, grades, data.cardNumber);

                    connection.commit(function (err) {
                        if (err) {
                            return connection.rollback(function () {
                                console.log(err);
                                res.json(false);
                            });
                        }
                        res.json({students: result, weekScores});
                    });
                });
            });
        });
    });
}

function updateWeekScores(res, weekInfo) {
    const connection = require('./connection');

    let weekScores = weekInfo.weekScores;
    let taskCard = 'task_card=case id';
    let standingMeeting = 'standing_meeting=case id';
    let tribalConflict = 'tribal_conflict=case id';
    let physicalCompetition = 'physical_competition=case id';
    let positive = 'positive=case id';
    let totalScore = 'total_score=case id';
    let diary = 'diary=case id';
    let weekName = `${weekInfo.weekName}=case student_id`;
    let ids = [];
    let studentIds = [];
    for(let i = 0; i < weekScores.length; i++) {
        taskCard += ` when ${weekScores[i].id} then ${weekScores[i].task_card}`;
        standingMeeting += ` when ${weekScores[i].id} then ${weekScores[i].standing_meeting}`;
        tribalConflict += ` when ${weekScores[i].id} then ${weekScores[i].tribal_conflict}`;
        physicalCompetition += ` when ${weekScores[i].id} then ${weekScores[i].physical_competition}`;
        positive += ` when ${weekScores[i].id} then ${weekScores[i].positive}`;
        totalScore += ` when ${weekScores[i].id} then ${weekScores[i].total_score}`;
        diary += ` when ${weekScores[i].id} then ${weekScores[i].diary}`;
        ids.push(weekScores[i].id);
        studentIds.push(weekScores[i].student_id);
        weekName += ` when ${weekScores[i].student_id} then ${weekScores[i].total_score}`
    }

    let idSql = ids.join(',');

    let studentIdSql = studentIds.join(',');

    connection.beginTransaction((err) => {
        if (err) {
            console.log(err);
            res.json(false);
            return;
        }
        const updateWeekScoreSql = `update week_score set ${taskCard} end, ${standingMeeting} end, ${tribalConflict} end, ${physicalCompetition} end, ${positive} end, ${totalScore} end, ${diary} end where id in(${idSql})`;
        connection.query(updateWeekScoreSql, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    console.log(err);
                    res.json(false);
                });
            }

            const updateTotalScoreSql = `update total_score set ${weekName} end where student_id in(${studentIdSql})`;
            connection.query(updateTotalScoreSql, (err, data) => {
                if (err) {
                    return connection.rollback(() => {
                        console.log(err);
                        res.json(false);
                    });
                }

                connection.commit(function (err) {
                    if (err) {
                        return connection.rollback(function () {
                            console.log(err);
                            res.json(false);
                        });
                    }
                    res.json(true);
                });
            })
        })
    });
}

function selectTeam(res, name) {
    const connection = require('./connection');

    const selectSql = `select id, name from teams where zone_name='${name}'`;

    connection.query(selectSql, (err, result) => {
        if(err) {
            console.log(err);
            res.json(false);
            return;
        }

        res.json(result);
    })
}

module.exports = {
    getStudentScore,
    updateWeekScores,
    selectTeam
};