module.exports = (state = {isSaved: "", allStudent: [], isRemoved: false, isModify: ""}, action) => {
    if (action.type === "ADD_STUDENT") {
        state.isSaved = action.data;
        return Object.assign({}, state);
    } else if (action.type === "GETALL_STUDENT") {
        state.allStudent = action.data;
        state.isSaved = "";
        state.isModify = "";
        return Object.assign({}, state);
    } else if (action.type === "REMOVE_STUDENT") {
        state.isRemoved = action.isRemoved;
        return Object.assign({}, state);
    } else if (action.type === "SEARCH_ONE") {
        state.allStudent = action.oneStudent;
        return Object.assign({}, state);
    } else if (action.type === "MODIFY_STUDENT") {
        state.isModify = action.isModify;
        return Object.assign({}, state);
    } else if(action.type === "CHANGE_STATE") {
        state.isModify = "";
        state.isSaved = "";

        return Object.assign({}, state);
    }
    else {
        return state;
    }
};