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
        request.post('/modifyTask')
            .send({data:action.data})
            .end((err,res)=>{
                next({type:"MODIFY_TASK",isUpdate:res.body.isUpdate});
            })
    }else if(action.type === "FILTER_TASK"){
        console.log(action.data);
        request.post('/filterTask')
            .send({data:action.data})
            .end((err,result)=>{
                next({type:"FILTER_TASK"});
            })
    }
    else{
        next(action);
    }
}

