function addZone(res, zone) {
    const connection = require('./connection');

    const insertZoneSql = `insert zones (name, city) values ('${zone.name}', '${zone.city}')`;

    connection.query(insertZoneSql, (err, result) => {
        if(err) {
            console.log(err);
            res.json(false);
        } else {
            res.json(true);
        }
    });
}

module.exports = {
    addZone
};