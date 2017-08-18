const express = require('express');
const router = express.Router();
const  studentMange= require('../dbs/studentMange');

router.post('/insertStudent', (req, res) => {
    const information=req.body;
    const informationArray=[];
    for(let key in information){
        informationArray.push(information[key]);
    }
    studentMange.insertStudent(informationArray,res);
});

router.post('/getAllStudent',(req,res)=>{
    studentMange.getAllStudent(res)
});

router.post('/removeStudent',(req,res)=>{
    const student_id=req.body.student_id;
    studentMange.removeStudent(student_id,res);
});

router.post('/searchOne',(req,res)=>{
    const search_id=req.body.search_id;
    studentMange.searchOne(search_id,res);
});

module.exports = router;
