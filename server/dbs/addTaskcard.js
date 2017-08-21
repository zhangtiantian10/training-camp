function addTaskcard(res,data){
    var connection = require('./connection');

    const sql = `insert tasks_card (name) values ('${data.name}')`;
    connection.beginTransaction((err) => {
        if (err) {
            res.json(false);
            return ;
        }
        connection.query(sql, (err, result) => {
            if(err) {
                return connection.rollback(() => {
                    res.json(false);
                    return ;
                });
            }

            connection.query('select id from student', (err, studentIds) => {
                if (err) {
                    return connection.rollback(() => {
                        res.json(false);
                        return ;
                    });
                }

                let insertTask = 'insert tasks_info (student_id, task_id) values';

                insertTask += studentIds.map(s => {
                    return ` (${s.id}, ${result.insertId})`
                }).join(',');

                connection.query(insertTask, (err, data) => {
                    if (err) {
                        return connection.rollback(() => {
                            throw err;
                            res.json(false);
                            return ;
                        });
                    }
                    connection.commit(function(err) {
                        if (err) {
                            return connection.rollback(function() {
                                console.log(err);
                                res.json(false);
                                return;
                            });
                        }
                        res.json(true);
                    });
                });
            });
        });
    });
}

module.exports = addTaskcard;