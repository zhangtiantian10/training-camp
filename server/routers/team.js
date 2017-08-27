const express = require('express');
const router = express.Router();
const Dao = require('../dbs/team');

router.post('/team', (req, res) => {
    Dao.insertTeam(res, req.body);
});

router.get('/teams', (req, res) => {
    Dao.getAllTeams(res);
});

module.exports = router;