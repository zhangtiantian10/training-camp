module.exports = (state = {isSaved: false, allStudent: [], isRemoved: false, isModify: false}, action) => {
    if (action.type === "ADD_STUDENT") {
        state.isSaved = action.data;
        return Object.assign({}, state);
    } else if (action.type === "GETALL_STUDENT") {
        state.allStudent = action.data;
        return Object.assign({}, state);
    }else if (action.type === "SEARCH_ONE") {
        state.allStudent = action.oneStudent;
        return Object.assign({}, state);
    } else if (action.type === "MODIFY_STUDENT") {
        state.isModify = action.isModify;
        return Object.assign({}, state);
    }
    else {
        return state;
    }
};