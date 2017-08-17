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
                console.log(res.body.isSaved);
                next({type:"ADD_STUDENT", data: res.body});
            });
    }
    else
        next(action);
};