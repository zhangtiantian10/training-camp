import request from "superagent";

export default store => next => action => {
    console.log(action.type);
    if(action.type === "ADD_TASKCARD"){
        request.post('/addTaskcard')
            .send(action.data.name)
            .end((err,res) => {
                next({type:'ADD_TASKCARD',status:res.body})
            })
    }
    else{
        next(action)
    }
}