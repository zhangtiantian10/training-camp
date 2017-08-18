const express = require('express');
const router = express.Router();
const getAllTaskcard = require('../dbs/getAllTaskcard');

router.post('/getAllTaskcard', (req, res) => {
    getAllTaskcard(res);
});

module.exports = router;