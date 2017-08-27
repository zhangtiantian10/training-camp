const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');


const student = require('./server/routers/student');
const week = require('./server/routers/week');
const taskcard = require('./server/routers/addTaskcard');
const getAllTaskcard = require('./server/routers/getAllTaskcard');
const weekScore = require('./server/routers/week-score');
const taskScore=require('./server/routers/taskScore');
const zone = require('./server/routers/zone');
const totalScore = require('./server/routers/total-score');
const team = require('./server/routers/team');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', student);
app.use('/', week);
app.use('/',taskcard);
app.use('/',getAllTaskcard);
app.use('/', weekScore);
app.use('/',taskScore);
app.use('/', zone);
app.use('/',totalScore);
app.use('/', team);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

