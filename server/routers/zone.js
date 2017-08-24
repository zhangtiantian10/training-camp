const express = require('express');
const router = express.Router();
const Dao = require('../dbs/zone');

router.post('/zone', (req, res) => {
    Dao.addZone(res, req.body);
});

router.get('/zones', (req, res) => {
    Dao.getAllZones(res);
});

module.exports = router;