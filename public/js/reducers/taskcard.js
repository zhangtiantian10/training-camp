module.exports = (state = {addStatus:''},action) => {
    if(action.type === "ADD_TASKCARD"){
        console.log(action.status);
        state.addStatus = action.status;
        return Object.assign({},state);
    }else if(action.type === "RESET_ADDSTATUS"){
        state.addStatus = '';
        return Object.assign({},state);
    }
    return state;
}