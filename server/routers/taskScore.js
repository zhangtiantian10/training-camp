const express = require("express");
const router = express.Router();
const taskScore = require('../dbs/taskScore');

router.post('/getAllTask', (req, res)=> {
    taskScore.selectAllTaskcard(res)
});

router.post('/modifyTask', (req, res)=> {
    taskScore.modifyTask(req.body.data, res);
});

router.post('/filterTask', (req, res)=> {
    let information = req.body.data;
    taskScore.filterTask(information, res);
});


router.post('/selectStudentForTeam', (req, res) => {
    taskScore.selectStudents(res, req.body);
})

module.exports = router;