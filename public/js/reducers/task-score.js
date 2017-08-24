module.exports = (state={allTask:[],isUpdate:false},action)=>{
     if(action.type === "GETALL_TASK"){
         state.allTask = action.data;
         return Object.assign({}, state);
     }else if(action.type === "MODIFY_TASK"){
         state.isUpdate=action.isUpdate;
         return Object.assign({}, state);
     }else if(action.type === "FILTER_TASK"){
         state.allTask=action.fliterTask;
         return Object.assign({}, state);
     }else if(action.type === "CHANGE_STATE"){
         state.isUpdate= false;
         return Object.assign({}, state);
     }
     else{
         return state;
     }
};