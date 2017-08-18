

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
            res.json({oneStudent:result});
        }
    });
}
function modifyStudent(information, res) {
    const connection = require('./connection');
    const modifySql=`UPDATE student SET name="${information.name}",zone="${information.zone}",team="${information.team}",city="${information.city}",school="${information.school}",major="${information.major}",
    grade="${information.grade}",gender="${information.gender}" WHERE id=${information.id}`;
    connection.query(modifySql,(err,result)=>{
        if (err) {
            console.log(err);
        } else {
                res.json({isModify:true});
        }
    });
}

module.exports = {
    insertStudent,
    getAllStudent,
    removeStudent,
    searchOne,
    modifyStudent
};
