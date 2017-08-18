

function insertStudent(studentInformation,res) {
    const connection = require('./connection');
    console.log("info",studentInformation);
    let addSql='INSERT INTO student(name,school,city,team,major,gender,grade,zone)VALUES(?,?,?,?,?,?,?,?)';
    connection.query(addSql, studentInformation,(err, result) => {
        if (err) {
           console.log(err);
        } else {
            console.log(result);
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


module.exports = {
    insertStudent,
    getAllStudent
};
