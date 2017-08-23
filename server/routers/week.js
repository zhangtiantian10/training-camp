const express = require('express');
const router = express.Router();
const Dao = require('../dbs/week');

router.post('/week', (req, res) => {
    Dao.addWeek(res, req.body);
});

router.get('/weeks', (req, res) => {
    Dao.getAllWeeks(res);
});

router.post('/modifyWeek', (req, res) => {
    Dao.modifyWeek(res, req.body);
})

module.exports = router;