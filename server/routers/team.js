const express = require('express');
const router = express.Router();
const Dao = require('../dbs/team');

router.post('/team', (req, res) => {
    Dao.insertTeam(res, req.body);
});

module.exports = router;