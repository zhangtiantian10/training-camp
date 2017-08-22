import request from "superagent";

export default store => next => action => {
    console.log(action);
    if(action.type === "SELECT_DATA"){
        console.log(action.type);
        request.post('/selectTaskcard')
            .send({data:action.data})
            .end((err,res)=>{
                next({type:"SELECT_DATA"})
            })
    }else if(action.type === "GETALL_TASK"){
        request.post('/getAllTask')
            .end((err,res)=>{
                console.log(res.body.data);
                next({type:"GETALL_TASK",data:res.body.data})
            })
    }
    else{
        next(action);
    }
}

