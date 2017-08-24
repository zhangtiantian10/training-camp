import request from 'superagent';

export default store => next => action => {
    if(action.type === 'ADD_ZONE') {
        request.post('/zone')
            .send(action.zone)
            .end((err, res) => {
                next({type: 'ADD_ZONE_BACK', data: res.body});
            });
    }
    else {
        next(action);
    }
}