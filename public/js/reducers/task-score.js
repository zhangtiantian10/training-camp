module.exports = (state = {allTask: [], isUpdate: "", isFind: "", allZone: [], allTeam: []}, action)=> {
    if (action.type === "GETALL_TASK") {
        state.allTask = action.data;
        state.isFind = "";
        state.isUpdate = "";
        return Object.assign({}, state);
    } else if (action.type === "MODIFY_TASK") {
        state.isUpdate = action.isUpdate;
        return Object.assign({}, state);
    } else if (action.type === "FILTER_TASK") {
        if (action.fliterTask.isFind) {
            state.allTask = action.fliterTask.tasks;
        } else {
            state.isFind = action.fliterTask.isFind;
        }
        return Object.assign({}, state);
    } else if (action.type === "CHANGE_STATE") {
        state.isUpdate = "";
        return Object.assign({}, state);

    } else if (action.type === "GET_ALL_ZONE") {
        state.allZone = action.data;
        return Object.assign({}, state);
    } else if (action.type === "GET_ALL_TEAM") {
        state.allTeam = action.data;
        return Object.assign({}, state);
    }
    else {
        return state;
    }
};