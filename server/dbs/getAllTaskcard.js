function getAllTaskcard(res) {
    const connection = require('./connection');

    const sql = "select * from tasks_card;"

    connection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            res.json(result);
        }
    })
}

module.exports = getAllTaskcard;