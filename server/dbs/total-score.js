function getAllScore(res) {
    const connection = require('./connection');

    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return;
        }
        let sql = `select * from total_score;`;
        connection.query(sql, (err, result)=> {
            if (err) {
                return connection.rollback(() => {
                    res.json(false);
                });
            }
            let keys = Object.keys(result[0]);

            let totalScore = result.map((r) => {
                let sum = 0;
                keys.forEach(k => {
                    if(k !== 'total_score' && k != 'id' && k !='student_id') {
                        sum += r[`${k}`];
                    }
                });

                return {id: r.id, total: sum};
            });

            let total = `total_score = case id`;
            let ids = [];
            for (let i = 0; i < totalScore.length; i++) {
                total += ` when ${totalScore[i].id} then ${totalScore[i].total}`;
                ids.push(totalScore[i].id);
            }
            let idSql = ids.join(',');
            let updateTotal = `update total_score set ${total} end where id in(${idSql});`;
            connection.query(updateTotal, (err, data)=> {
                if (err) {
                    return connection.rollback(() => {
                        console.log(err);
                        res.json(false);
                    });
                }
                let sortTotal = `select a.name,b.* from student a,total_score b where a.id = b.student_id order by b.total_score desc;`;
                connection.query(sortTotal, (err, setArr)=> {
                    if (err) {
                        console.log(err);
                        return connection.rollback(() => {
                            res.json(false);
                        });
                    }

                    connection.commit(function (err) {
                        if (err) {
                            return connection.rollback(function () {
                                res.json(false);
                            });
                        }
                        res.json({allScore: setArr, keyArr: Object.keys(setArr[0])})
                    });
                })
            })

        })
    });
}

function selectTotalScore(res, data) {
    const connection = require('./connection');

    let selectSql = '';

    if (data.zone !== '' && data.week === '') {
        selectSql = `select student.name as name, total_score.* from student, total_score where student.id=total_score.student_id and student_id in (select id from student where zone='${data.zone}') order by total_score.total_score desc`;
    } else if(data.zone === "" && data.week !== '') {
        selectSql = `select student.name as name, week_score.* from student, week_score where student.id=week_score.student_id and week_score.week_id=${data.week} order by week_score.total_score desc`;
    } else if(data.zone !== "" && data.week !== "") {
        selectSql = `select student.name as name, week_score.* from student, week_score where student.id=week_score.student_id and week_score.week_id=${data.week} and week_score.student_id in (select id from student where zone='${data.zone}') order by week_score.total_score desc`;
    }

    connection.query(selectSql, (err, result) => {
        if(err) {
            console.log(err);
            res.json(false);
        } else {
            let keys = [];
            if(result.length === 0) {
                res.json({allScore: result, keyArr: keys});
            } else {
                const keys = Object.keys(result[0]);

                res.json({allScore: result, keyArr: keys});
            }
        }
    })
}


module.exports = {
    getAllScore,
    selectTotalScore
};