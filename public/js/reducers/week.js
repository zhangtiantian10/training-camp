module.exports = (state = {addSuccess: "", weeks: [], modifySuccess: ""},action) => {
    if(action.type === 'ADD_WEEK_BACK') {
        state.addSuccess = action;
        return Object.assign({}, state);
    } else if(action.type === 'MODIFY_ADD_SUCCESS') {
        state.addSuccess = "";
        return Object.assign({}, state);
    } else if(action.type === 'ALL_WEEKS') {
        state.weeks = action.weeks;
        state.modifySuccess = "";
        return Object.assign({}, state);
    } else if (action.type === 'MODIFY_WEEK_BACK') {
        state.modifySuccess = action.data;
        return Object.assign({}, state);
    }
    return state;
};