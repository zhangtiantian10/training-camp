module.exports = (state = {allTask: [], isUpdate: false,isFind:""}, action)=> {
    console.log("action",action);
    if (action.type === "GETALL_TASK") {
        state.allTask = action.data;
        return Object.assign({}, state);
    } else if (action.type === "MODIFY_TASK") {
        state.isUpdate = action.isUpdate;
        return Object.assign({}, state);
    } else if (action.type === "FILTER_TASK") {
        if(action.fliterTask.isFind){
            state.isFind=true;
            state.allTask=action.fliterTask.tasks;
        }else{
            state.isFind=action.fliterTask.isFind;
        }
        return Object.assign({}, state);
    } else if (action.type === "CHANGE_STATE") {
        state.isUpdate = false;
        return Object.assign({}, state);
    }else if(action.type === "CHANGE_TASKsTATE"){
        state.isFind =true;
        return Object.assign({}, state);
    }
    else {
        return state;
    }
};