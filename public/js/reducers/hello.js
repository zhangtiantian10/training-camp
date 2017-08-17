module.exports = (state= {content: ""} , action) => {
    if(action.type === "GET_CONTENT") {
        state.content = "hello world";
        return Object.assign({}, state);
    } else {
        return state;
    }
}