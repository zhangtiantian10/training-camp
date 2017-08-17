const express = require('express');
const router = express.Router();
const  studentMange= require('../dbs/studentMange');

router.post('/insertStudent', (req, res) => {
    console.log("req",req.body);
    studentMange.getHello(res);
});

module.exports = router;
