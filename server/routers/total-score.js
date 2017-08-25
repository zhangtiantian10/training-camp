const express = require('express');
const router = express.Router();
const totalScore = require('../dbs/total-score');

router.post('/getAllTotalScore',(req,res)=>{
    totalScore.getAllScore(res);
});

router.post('/selectTotalScore', (req, res) => {
    totalScore.selectTotalScore(res, req.body);
});

module.exports = router;