const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const createDatabase = require('./server/dbs/create-database');
createDatabase();

const hello = require('./server/routers/hello');

app.use(express.static(__dirname + '/public'));

app.use('/', hello);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
