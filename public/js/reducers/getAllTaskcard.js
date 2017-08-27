module.exports = (state={taskcards:[]},action)=>{
    if(action.type === "GET_ALL_TASKCARD"){
        state.taskcards = action.taskcards;
        return {taskcards:[...state.taskcards]};
    }
    return state;
}