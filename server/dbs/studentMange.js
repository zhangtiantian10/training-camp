

function insertStudent(studentInformation,res) {
    const connection = require('./connection');
    console.log("info",studentInformation);
    let addSql='INSERT INTO student(name,school,city,team,major,gender,grade,zone)VALUES(?,?,?,?,?,?,?,?)';
    connection.query(addSql, studentInformation,(err, result) => {
        if (err) {
           console.log(err);
        } else {
            if (result.length === 0) {
                res.json({isSaved:false});
            } else
                res.json({isSaved:true});
        }
    });
}

function getAllStudent(res){
    const connection = require('./connection');
    const searchSql='select * from student';
    connection.query(searchSql,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.json({getAll: result});
        }
    });
}

function removeStudent(id, res) {
    const connection = require('./connection');
    const removeSql=`DELETE FROM student where id=${id}`;
    connection.query(removeSql,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            if(result.length === 0){
                res.json({isRemoved:false});
            }else{
                res.json({isRemoved:true});
            }
        }
    });
}

function searchOne(id, res) {
    const connection = require('./connection');
    const searchSql=`SELECT * FROM student WHERE id=${id}`;
    connection.query(searchSql,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.json({oneStudent:result[0]});
        }
    });
}


module.exports = {
    insertStudent,
    getAllStudent,
    removeStudent,
    searchOne
};
