import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_WEEK') {
        request.post('/week')
            .send(action.data)
            .end((err, res) => {
                next({type: 'ADD_WEEK_BACK', data: res.body});
            });
    }
    else
        next(action);
};