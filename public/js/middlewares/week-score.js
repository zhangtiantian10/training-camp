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
    } else if (action.type === 'SELECT_TEAM') {
        request.post('/teams')
            .send({name: action.name})
            .end((err, res) => {
                if (res.body === false) {
                    alert('查找小组失败！');
                    return;
                }
                next({type: 'SELECT_TEAM_BACK', teams: res.body});
            })

    } else
        next(action);
}