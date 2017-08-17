const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
const createDatabase = require('./server/dbs/create-database');
createDatabase();

const hello = require('./server/routers/hello');
const week = require('./server/routers/week');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use('/', hello);
app.use('/', week);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
