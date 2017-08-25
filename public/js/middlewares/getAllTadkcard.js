import request from 'superagent';

module.exports = store => next => action => {
    if(action.type === "GET_ALL_TASKCARD"){
        request.post('/getAllTaskcard')
            .end((err,res) => {
                next({type:"GET_ALL_TASKCARD",taskcards:res.body})
        })
    }else{
        next(action);
    }
}