module.exports = (state= {content: ""} , action) => {
    if(action.type === "GET_CONTENT") {
        state.content = action.data;
        return Object.assign({}, state);
    } else {
        return state;
    }
}