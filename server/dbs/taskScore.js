
function selectAllTaskcard(res) {
  const connection=require('./connection');
    const selectIdSql = ' SELECT a.id, a.student_id,a.task_id,a.finished_date,a.review_date,a.upgrade_date,a.upgrade_grade, b.name FROM tasks_info a LEFT JOIN student b ON a.student_id = b.id;';
    connection.query(selectIdSql,(err,result)=>{
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }
        res.json({data:result});
    });
}


module.exports={
    selectAllTaskcard
};