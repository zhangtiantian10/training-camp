module.exports = (state={taskcards:[]},action)=>{
    if(action.type === "GET_ALL_TASKCARD"){
        console.log('reducer',action.taskcards);
        state.taskcards = action.taskcards;
        return {taskcards:[...state.taskcards]};
    }
    return state;
}