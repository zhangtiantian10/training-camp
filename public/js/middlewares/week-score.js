import request from 'superagent';

export default store => next => action => {
    if(action.type === 'SELECT_STUDENT_SCORE') {
        request.post('/studentScoreForWeek')
            .send(action.data)
            .end((err, res) => {
                next({type: "SELECT_STUDENT_BACK", students: res.body});
            })
    } else
        next(action);
}