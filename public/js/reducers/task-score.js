module.exports = (state={allTask:[],isUpdate:false},action)=>{
     if(action.type === "GETALL_TASK"){
         state.allTask = action.data;
         return Object.assign({}, state);
     }else if(action.type === "modifyTask"){
         state.isUpdate=action.isUpdate;
         return Object.assign({}, state);
     }
     else{
         return state;
     }
};