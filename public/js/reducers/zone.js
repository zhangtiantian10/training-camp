module.exports = (state = {addSuccess: ""}, action) => {

    if(action.type === "ADD_ZONE_BACK") {
        state.addSuccess = action.data;

        return Object.assign({}, state);
    } else if(action.type === "CHANGE_ADD_STATE") {
        state.addSuccess = "";

        return Object.assign({}, state);
    } else{
        return state;
    }
};