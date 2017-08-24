import request from 'superagent';

export default store => next => action => {
    if(action.type === 'ADD_ZONE') {
        request.post('/zone')
            .send(action.zone)
            .end((err, res) => {
                next({type: 'ADD_ZONE_BACK', data: res.body});
            });
    } else if(action.type === 'GET_ALL_ZONES') {
        request.get('/zones')
            .end((err, res) => {
                next({type: "GET_ALL_ZONES_BACK", data: res.body});
            })
    }
    else {
        next(action);
    }
}