module.exports = (state = {addSuccess: ""},action) => {
    if(action.type === 'ADD_WEEK_BACK') {
        state.addSuccess = action;
        return Object.assign({}, state);
    } else if(action.type === 'MODIFY_ADD_SUCCESS') {
        state.addSuccess = "";
        return Object.assign({}, state);
    }
    return state;
};