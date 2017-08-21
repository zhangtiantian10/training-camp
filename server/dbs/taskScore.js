
function selectAllTaskcard(res) {
  const connection=require('./connection');
    const selectIdSql = `select * from tasks_info`;
    connection.query(selectIdSql,(err,result)=>{
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }
        res.json({allTask:result});
    })
}

module.exports={
    selectAllTaskcard
};