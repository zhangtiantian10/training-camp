const express = require('express');
const router = express.Router();
const Dao = require('../dbs/week-score');

router.post('/studentScoreForWeek', (req, res) => {
    Dao.getStudentScore(res, req.body);
});

module.exports = router;