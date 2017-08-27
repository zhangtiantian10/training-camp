const express = require('express');
const router = express.Router();
const Dao = require('../dbs/week-score');

router.post('/studentScoreForWeek', (req, res) => {
    Dao.getStudentScore(res, req.body);
});

router.post('/weekScore', (req, res) => {
    Dao.updateWeekScores(res, req.body);
});

router.post('/teams', (req, res) => {
    Dao.selectTeam(res, req.body.name);
})

module.exports = router;