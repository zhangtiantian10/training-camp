import request from 'superagent';

export default store => next => action => {
    console.log("action",action);
    if (action.type === 'ADD_STUDENT') {
        request.post('/insertStudent')
            .send({
                name:action.data.name,
                school:action.data.school,
                city:action.data.city,
                group:action.data.group,
                major:action.data.major,
                gender:action.data.gender,
                grade:action.data.grade,
                zone:action.data.zone
            })
            .end((err, res) => {
                next({type:"ADD_STUDENT", data: res.body.isSaved});
            });
    }else if(action.type === "GETALL_STUDENT"){
     request.post('/getAllStudent')
         .end((err,res)=>{
             next({type:"GETALL_STUDENT",data:res.body});
         })
    }
    else
        next(action);
};