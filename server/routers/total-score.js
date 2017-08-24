const express = require('express');
const router = express.Router();
const totalScore = require('../dbs/total-score');

router.post('/getAllTotalScore',(req,res)=>{
    totalScore.getAllScore(res);
});

router.post('/searchZone',(req,res) => {
    console.log(req.body.zone)
    totalScore.searchZone(res,req.body.zone)
})

module.exports = router;