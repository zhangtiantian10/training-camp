module.exports = (state= {isSaved: false} , action) => {
    if(action.type === "ADD_STUDENT") {
        state.isSaved = action.data;
        return Object.assign({}, state);
    } else {
        return state;
    }
};