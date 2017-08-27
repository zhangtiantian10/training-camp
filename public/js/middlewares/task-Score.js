import request from "superagent";

export default store => next => action => {

    if (action.type === "SELECT_DATA") {
        request.post('/selectTaskcard')
            .send({data: action.data})
            .end((err, res)=> {
                next({type: "SELECT_DATA"})
            })
    } else if (action.type === "GETALL_TASK") {
        request.post('/getAllTask')
            .end((err, res)=> {
                next({type: "GETALL_TASK", data: res.body.data})
            })
    } else if (action.type === "MODIFY_TASK") {
        request.post('/modifyTask')
            .send({data: action.data})
            .end((err, res)=> {
                next({type: "MODIFY_TASK", isUpdate: res.body.isUpdate});
            })
    } else if (action.type === "FILTER_TASK") {
        request.post('/filterTask')
            .send({data: action.data})
            .end((err, res)=> {
                next({type: "FILTER_TASK", fliterTask: res.body});
            })
    } else if (action.type === 'SELECT_STUDENT_FOR_ZONE_TEAM') {
        request.post('/selectStudentForTeam')
            .send(action.zoneAndTeam)
            .end((err, res) => {
                if (err || res.body === false) {
                    alert('查找学生失败');
                    return;
                }
                next({type: 'SELECT_STUDENT_FOR_ZONE_TEAM_BACK', students: res.body});
            });
    }
    else {
        next(action);
    }
}

