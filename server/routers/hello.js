const express = require('express');
const router = express.Router();
const Dao = require('../dbs/get-hello');

router.get('/hello', (req, res) => {
    Dao.getHello(res);
});

module.exports = router;
