const express = require('express');
const router = express.Router();
const Dao = require('../dbs/zone');

router.post('/zone', (req, res) => {
    Dao.addZone(res, req.body);
});

module.exports = router;