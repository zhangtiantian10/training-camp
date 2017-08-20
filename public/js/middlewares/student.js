import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_STUDENT') {
        request.post('/insertStudent')
            .send({
                name: action.data.name,
                school: action.data.school,
                city: action.data.city,
                team:action.data.team,
                major: action.data.major,
                gender: action.data.gender,
                grade: action.data.grade,
                zone: action.data.zone
            })
            .end((err, res) => {
                next({type: "ADD_STUDENT", data: res.body.isSaved});
            });
    } else if (action.type === "GETALL_STUDENT") {
        request.post('/getAllStudent')
            .end((err, res)=> {
                next({type: "GETALL_STUDENT", data: res.body.getAll});
            })
    } else if (action.type === "SEARCH_ONE") {
        request.post('/searchOne')
            .send({search_name: action.data})
            .end((err, res)=> {
                next({type: "SEARCH_ONE", oneStudent: res.body.oneStudent})
            })
    } else if (action.type === "MODIFY_STUDENT") {
        request.post('/modifyStudent')
            .send({information: action.data})
            .end((err, res)=> {
                next({type: "MODIFY_STUDENT", isModify: res.body.isModify})
            })
    }else
        next(action);
};