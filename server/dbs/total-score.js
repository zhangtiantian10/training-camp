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
                            res.json({allScore:setArr,keyArr:Object.keys(setArr[0])})
                        });
                    })
                })

        })
    });
}

function searchZone(res,data) {
    let connection = require('./connection');
    connection.beginTransaction((err) => {
        // if (err) {
        //     console.log(err);
        //     res.json({isFind: false});
        //     return;
        // }
        // let selectSql = `select id from student where zone = "${data.zone}";`;
        // connection.query(selectSql,(err,result) => {
        //     if (err) {
        //         return connection.rollback(function () {
        //             res.json(false);
        //         });
        //     }
        //     let ids = [];
        //     for(let i = 0; i < result.length; i++){
        //         ids.push(result[i].id)
        //     }
        //     ids = ids.join(',');
        //     console.log(result);
            let sort = ` select distinct a.name,b.* from student a,total_score b  where b.student_id in (select id from student where zone = '001') and a.id in(select id from student where zone = '001');`;
            console.log(sort);
            connection.query(sort,(res,data) => {
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
                    console.log(data);
                    res.json({allScore:data})
                });
            })
        })
    //})
}

module.exports = {
    getAllScore,
    searchZone
};