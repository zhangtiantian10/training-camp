import request from 'superagent';

module.exports = store => next => action => {
    if(action.type === "GET_ALL_SCORE"){
        request.post('/getAllTotalScore')
            .end((err,res) => {
                next({type:"GET_ALL_SCORE",totalScore:res.body})
            })
    } else if(action.type === 'SELECT_TOTAL_SCORE') {
        request.post('/selectTotalScore')
            .send(action.data)
            .end((err, res) => {
                if(err || res.body === false) {
                    alert('获取排名失败！');
                    return ;
                }

                next({type: 'GET_ALL_SCORE', totalScore: res.body});
            })
    }
    else{
        next(action);
    }
}