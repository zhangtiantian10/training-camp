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

function getAllZones(res) {
    const connection = require('./connection');

    const selectZoneSql = 'select * from zones';

    connection.query(selectZoneSql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({getSuccess: false, zones: []});
        } else {
            res.json({getSuccess: true, zones: result});
        }
    })
}

module.exports = {
    addZone,
    getAllZones
};