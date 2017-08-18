const express = require('express');
const router = express.Router();
const addTaskcard = require('../dbs/addTaskcard');

router.post('/addTaskcard', (req, res) => {
    addTaskcard(res, req.body);
    console.log(req.body);
});

module.exports = router;