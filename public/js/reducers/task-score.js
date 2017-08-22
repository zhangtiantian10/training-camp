module.exports = (state={allTask:[]},action)=>{
     if(action.type === "GETALL_TASK"){
         state.allTask = action.data;
         return Object.assign({}, state);
     }else{
         return state;
     }
};