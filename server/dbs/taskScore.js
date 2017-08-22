
function selectAllTaskcard(res) {
  const connection=require('./connection');
    const selectSql=` select a.id, a.student_id,a.task_id,a.finished_date,a.review_date,a.review_grade,a.upgrade_date,a.upgrade_grade, b.name as student_name,c.name as task_name
 from tasks_info a,student b,tasks_card c
 where a.student_id=b.id and a.task_id=c.id`;
    connection.query(selectSql,(err,result)=>{
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