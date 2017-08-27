function insertTeam(res, team) {
    const connection = require('./connection');

    const insertTeamSql = `insert into teams (name, zone_name) select '${team.teamName}', '${team.zoneName}' from dual where not exists (select * from teams where teams.name='${team.teamName}' and teams.zone_name='${team.zoneName}')`;

    connection.beginTransaction((err) => {
        if (err) {
            console.log(err);
            res.json(false);
            return;
        }

        connection.query(insertTeamSql, (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    console.log(err);
                    res.json({insertSuccess: false, nameExist: false});
                });
            }

            if(result.message === '&Records: 0  Duplicates: 0  Warnings: 0') {
                connection.commit((err) => {
                    if (err) {
                        return connection.rollback(() => {
                            console.log(err);
                            res.json({insertSuccess: false, nameExist: false});
                        });
                    }
                    res.json({insertSuccess: false, nameExist: true});
                });
                return;
            }


            const selectZoneSql = `select team_number as number from zones where name='${team.zoneName}'`;

            connection.query(selectZoneSql, (err, select) => {
                if (err) {
                    return connection.rollback(() => {
                        console.log(err);
                        res.json({insertSuccess: false, nameExist: false});
                    });
                }

                const updateZoneTeamNumberSql = `update zones set team_number=${select[0].number + 1} where name='${team.zoneName}'`;


                connection.query(updateZoneTeamNumberSql, (err, update) => {
                    if (err) {
                        return connection.rollback(() => {
                            console.log(err);
                            res.json({insertSuccess: false, nameExist: false});
                        });
                    }

                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() => {
                                console.log(err);
                                res.json({insertSuccess: false, nameExist: false});
                            });
                        }

                        res.json({insertSuccess: true, nameExist: false});

                    });
                });
            });
        });
    });
}

function getAllTeams(res) {
    const connection = require('./connection');

    const selectTeamSql = `select * from teams`;

    connection.query(selectTeamSql, (err, result) => {
        if (err) {
            console.log(err);
            res.json(false);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    insertTeam,
    getAllTeams
}