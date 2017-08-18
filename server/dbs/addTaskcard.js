function addTaskcard(res,data){
    var connect = require('./connection');

    const sql = `insert tasks_card (name) values ('${data.name}')`;
    connect.query(sql,(err,result) => {
        if(err){
            console.log(err);
            res.json(false);
        }else{
            res.json(true);
        }
    })
}

module.exports = addTaskcard;