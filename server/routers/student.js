const express = require('express');
const router = express.Router();
const  studentMange= require('../dbs/studentMange');

router.post('/insertStudent', (req, res) => {
    console.log("req",req.body);
    const information=req.body;
    const informationArray=[];
    for(let key in information){
        informationArray.push(information[key]);
    }
    studentMange.insertStudent(informationArray,res);
});

module.exports = router;
