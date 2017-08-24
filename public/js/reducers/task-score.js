module.exports = (state = {allTask: [], isUpdate: false,isFind:""}, action)=> {
    console.log("action",action);
    if (action.type === "GETALL_TASK") {
        state.allTask = action.data;
        state.isFind = "";
        return Object.assign({}, state);
    } else if (action.type === "MODIFY_TASK") {
        state.isUpdate = action.isUpdate;
        return Object.assign({}, state);
    } else if (action.type === "FILTER_TASK") {
        if(action.fliterTask.isFind){
            state.allTask=action.fliterTask.tasks;
        }else{
            state.isFind=action.fliterTask.isFind;
        }
        return Object.assign({}, state);
    } else if (action.type === "CHANGE_STATE") {
        state.isUpdate = false;
        return Object.assign({}, state);
    }else if(action.type === "CHANGE_TASK_STATE"){
        state.isFind ="";
        return Object.assign({}, state);
    }
    else {
        return state;
    }
};