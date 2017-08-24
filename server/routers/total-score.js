const express = require('express');
const router = express.Router();
const totalScore = require('../dbs/total-score');

router.post('/getAllTotalScore',(req,res)=>{
    totalScore.getAllScore(res);
});

module.exports = router;