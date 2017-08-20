import request from "superagent";

export default store => action => next => {
    console.log(action);
    if(action.type === "SELECT_DATA"){
        request.post('/selectTaskcard')
            .send({data:action.data})
            .end((err,res)=>{
                next({type:"SELECT_DATA"});
            })
    }
}