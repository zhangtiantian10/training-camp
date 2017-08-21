module.exports = (state={allTask:[]},action)=>{
    console.log(action.data);
     if(action.type === "GETALL_TASK"){
         state.allTask = action.data.allTask;
         return Object.assign({}, state);
     }else{
         return state;
     }
};