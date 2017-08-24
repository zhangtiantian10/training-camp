module.exports = (state = {addSuccess: "", getSuccess: "", zones: []}, action) => {

    if(action.type === "ADD_ZONE_BACK") {
        state.addSuccess = action.data;

        return Object.assign({}, state);
    } else if(action.type === "CHANGE_STATE") {
        state.addSuccess = "";
        state.getSuccess = "";

        return Object.assign({}, state);
    } else if(action.type === "GET_ALL_ZONES_BACK"){
        console.log(action);
        state.zones = action.data.zones;
        state.getSuccess = action.data.getSuccess;
        state.addSuccess = "";

        return Object.assign({}, state);
    } else{
        return state;
    }
};