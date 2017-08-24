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
<<<<<<< HEAD
const totalScore = require('./server/routers/total-score');
=======
const taskScore=require('./server/routers/taskScore');
>>>>>>> 19663664ef86cdb0fc5ef4a15d278cfffd04c351


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', student);
app.use('/', week);
app.use('/',taskcard);
app.use('/',getAllTaskcard);
app.use('/', weekScore);
<<<<<<< HEAD
app.use('/',totalScore);
=======
app.use('/',taskScore);
>>>>>>> 19663664ef86cdb0fc5ef4a15d278cfffd04c351

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

