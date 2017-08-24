module.exports = (state={allScore:[]},action) => {
    if(action.type === 'GET_ALL_SCORE'){
        console.log(action.totalScore);
        state.allScore = action.totalScore;
        return Object.assign({},state);
    }
    return state;
};