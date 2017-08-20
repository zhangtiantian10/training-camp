import request from "superagent";

export default store => next => action => {
    if(action.type === "SELECT_DATA"){
        console.log(action.type);
        request.post('/selectTaskcard')
            .send({data:action.data})
            .end((err,res)=>{
                next({type:"SELECT_DATA"});
            })
    }else{
        next(action);
    }
}

