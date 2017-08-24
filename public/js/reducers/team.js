module.exports = (state = {nameExist: "", addSuccess: ""}, action) => {

    if(action.type === 'ADD_TEAM_BACK') {
        state.nameExist = action.data.nameExist;
        state.addSuccess = action.data.insertSuccess;

        return Object.assign({}, state);
    } else if (action.type === 'CANCEL_STATE') {
        state.nameExist = "";
        state.addSuccess = "";

        return Object.assign({}, state);
    } else {
        return state;
    }
};