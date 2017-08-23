import request from 'superagent';

module.exports = store => next => action => {
    console.log(action.type);
    if(action.type === "GET_ALL_SCORE"){
        request.post('/getAllTotalScore')
            .end((err,res) => {
                next({type:"GET_ALL_SCORE",taskcards:res.body})
            })
    }else{
        next(action);
    }
}