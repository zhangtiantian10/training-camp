const express = require('express');
const router = express.Router();
const getAllScore = require('../dbs/total-score');

router.post('/getAllTotalScore',(req,res)=>{
    getAllScore(res);
});

module.exports = router;