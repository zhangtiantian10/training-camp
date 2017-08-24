import request from 'superagent';

module.exports = store => next => action => {
    if(action.type === 'ADD_TEAM') {
        request.post('/team')
            .send(action.team)
            .end((err, res) => {
                next({type: 'ADD_TEAM_BACK', data: res.body});
            });
    } else if (action.type === 'GET_ALL_TEAMS') {
        request.get('/teams')
            .end((err, res) => {
                console.log(res.body);
                if (res.body === false) {
                    alert('获取信息失败!');
                    return;
                }
                next({type: 'GET_ALL_TEAMS_BACK', teams: res.body});
            })
    } else {
        next(action);
    }
}