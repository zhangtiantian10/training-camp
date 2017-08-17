import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_CONTENT') {
        request.get('/hello')
            .end((err, res) => {
                console.log(res.body);
                next({type:"GET_CONTENT", data: res.body});
            });
    }
    else
        next(action);
};