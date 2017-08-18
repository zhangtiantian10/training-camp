import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_WEEK') {
        request.post('/week')
            .send(action.data)
            .end((err, res) => {
                next({type: 'ADD_WEEK_BACK', data: res.body});
            });
    } else if(action.type === 'GET_ALL_WEEKS') {
        request.get('/weeks')
            .end((err, res) => {
                if(err) {
                    alert('获取信息失败');
                } else
                    next({type: 'ALL_WEEKS', weeks: res.body});
            });
    } else if (action.type === 'MODIFY_WEEK') {
        console.log(action.data)
        request.post('/modifyWeek')
            .send(action.data)
            .end((err, res) => {
                next({type: 'MODIFY_WEEK_BACK', data: res.body});
            });
    }
    else
        next(action);
};