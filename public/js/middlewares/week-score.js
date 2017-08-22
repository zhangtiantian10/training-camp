import request from 'superagent';

export default store => next => action => {
    if(action.type === 'SELECT_STUDENT_SCORE') {
        request.post('/studentScoreForWeek')
            .send(action.data)
            .end((err, res) => {
                if(err || !res.body) {
                    alert('获取信息失败');
                    return;
                }
                next({type: "SELECT_STUDENT_BACK", data: res.body});
            })
    } else if (action.type === 'UPDATE_WEEK_SCORES'){
        request.post('/weekScore')
            .send(action.weekScores)
            .end((err, res) => {
                next({type: 'UPDATE_WEEK_SCORES_BACK', isSuccess: res.body});
            })
    } else
        next(action);
}