module.exports = (state= {isSaved: false,allStudent:[],isRemoved:false,student:{}} , action) => {
    if(action.type === "ADD_STUDENT") {
        state.isSaved = action.data;
        return Object.assign({}, state);
    }else if(action.type === "GETALL_STUDENT"){
        state.allStudent=action.data;
        return Object.assign({}, state);
    }else if(action.type === "REMOVE_STUDENT"){
        state.isRemoved=action.isRemoved;
        return Object.assign({}, state);
    }else if(action.type === "SEARCH_ONE"){
        state.student=action.oneStudent;
        return Object.assign({}, state);
    } else {
        return state;
    }
};