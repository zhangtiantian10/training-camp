function getAllScore(res) {
    const connection = require('./connection');

    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return;
        }
        let sql = `select * from total_score;`;
        connection.query(sql,(err,result)=>{
            if (err) {
                return connection.rollback(() => {
                    res.json(false);
                });
            }
            let keys = Object.keys(result[0]);
            let totalScore = [];
            for(let ele of result){
                let total = 0;
                for(let i = 2;i < keys.length - 1; i++){
                    total += ele[keys[i]];
                }
                totalScore.push({id:ele.id,total})
            }
            let total = `total_score = case id`;
            let ids =[];
            for(let i = 0; i < totalScore.length; i++){
                total += ` when ${totalScore[i].id} then ${totalScore[i].total}`;
                ids.push(totalScore[i].id);
            }
            let idSql = ids.join(',');
                let updateTotal = `update total_score set ${total} end where id in(${idSql});`;
                connection.query(updateTotal,(err,data)=>{
                    if (err) {
                        return connection.rollback(() => {
                            console.log(err);
                            res.json(false);
                        });
                    }
                    let sortTotal = `select a.name,b.* from student a,total_score b where a.id = b.student_id order by b.total_score desc;`;
                    connection.query(sortTotal,(err,setArr)=>{
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
                            res.json({allScore:setArr})

                        });
                    })
                })

        })
    });
}

module.exports = getAllScore;