import request from 'superagent';

module.exports = store => next => action => {
    if(action.type === 'ADD_TEAM') {
        request.post('/team')
            .send(action.team)
            .end((err, res) => {
                next({type: 'ADD_TEAM_BACK', data: res.body});
            });
    } else {
        next(action);
    }
}