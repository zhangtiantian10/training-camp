import request from 'superagent';

module.exports = store => next => action => {
    console.log(action.type);
    if(action.type === "GET_ALL_SCORE"){
        request.post('/getAllTotalScore')
            .end((err,res) => {
                console.log(res.body);
                next({type:"GET_ALL_SCORE",totalScore:res.body})
            })
    }
    else{
        next(action);
    }
}