function getStudentScore(res, data) {
    const connection = require('./connection');

    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return;
        }

        connection.query(`select name from student where zone='${data.zone}' and team='${data.team}'`, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    res.json(false);
                    return;
                });
            }

            connection.query(`select * from week_score where student_id in (select id from student where zone='${data.zone}' and team='${data.team}') && week_id=${data.week}`, (err, weekScores) => {
                if (err) {
                    return connection.rollback(() => {
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
                    res.json({students: result, weekScores});
                });
            });
        });
    });
}

function updateWeekScores(res, weekScores) {
    const connection = require('./connection');

    let taskCard = 'task_card=case id';
    let standingMeeting = 'standing_meeting=case id';
    let tribalConflict = 'tribal_conflict=case id';
    let physicalCompetition = 'physical_competition=case id';
    let positive = 'positive=case id';
    let totalScore = 'total_score=case id';
    let diary = 'diary=case id';
    let idSql = '';
    let ids = [];
    for(let i = 0; i < weekScores.length; i++) {
        taskCard += ` when ${weekScores[i].id} then ${weekScores[i].taskCard}`;
        standingMeeting += ` when ${weekScores[i].id} then ${weekScores[i].standingMeeting}`;
        tribalConflict += ` when ${weekScores[i].id} then ${weekScores[i].tribalConflict}`;
        physicalCompetition += ` when ${weekScores[i].id} then ${weekScores[i].physicalCompetition}`;
        positive += ` when ${weekScores[i].id} then ${weekScores[i].positive}`;
        totalScore += ` when ${weekScores[i].id} then ${weekScores[i].totalScore}`;
        diary += ` when ${weekScores[i].id} then ${weekScores[i].diary}`;
        ids.push(weekScores[i].id);
    }

    idSql = ids.join(',');

    const updateSql = `update week_score set ${taskCard} end, ${standingMeeting} end, ${tribalConflict} end, ${physicalCompetition} end, ${positive} end, ${totalScore} end, ${diary} end where id in(${idSql})`;
    connection.query(updateSql, (err, result) => {
        if (err) {
            res.json(false);
        } else {
            res.json(true);
        }
    })
}

module.exports = {
    getStudentScore,
    updateWeekScores
};