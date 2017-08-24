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
    else if(action.type === 'SEARCH_ZONE'){
        request.post('/searchZone')
            .send({zone:action.data})
            .end((err,res)=>{
                next({type:'SEARCH_ZONE',filterZone:res.body})
            })
    }
    else{
        next(action);
    }
}