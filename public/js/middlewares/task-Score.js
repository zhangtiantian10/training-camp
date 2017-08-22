import request from "superagent";

export default store => next => action => {
    if(action.type === "SELECT_DATA"){
        request.post('/selectTaskcard')
            .send({data:action.data})
            .end((err,res)=>{
                next({type:"SELECT_DATA"})
            })
    }else if(action.type === "GETALL_TASK"){
        request.post('/getAllTask')
            .end((err,res)=>{
                next({type:"GETALL_TASK",data:res.body.data})
            })
    }else if(action.type === "MODIFY_TASK"){
        console.log(action.data);
        request.post('/modifyTask')
            .send({id:action.data})
            .end((err,res)=>{
                next({type:"MODIFY_TASK"});
            })
    }else{
        next(action);
    }
}

