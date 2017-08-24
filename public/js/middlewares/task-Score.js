import request from "superagent";

export default store => next => action => {
    if (action.type === "GETALL_TASK") {
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
    } else if (action.type === "GET_ALL_ZONE") {
        request.post('/getAllZone')
            .end((err, res)=> {
                next({type: "GET_ALL_ZONE", data: res.body.data});
            });
    } else if (action.type === "GET_ALL_TEAM") {
        request.post('/getAllTeam')
            .end((err, res)=> {
                next({type: "GET_ALL_TEAM", data: res.body.data});
            })
    }
    else {
        next(action);
    }
}

