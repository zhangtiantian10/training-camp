module.exports = (state={totalScore:[]},action)=>{
    if(action.type === "GET_ALL_SCORE"){
        console.log('reducer',action.totalScore);
        state.totalScore = action.totalScore;
        return {totalScore:[...state.totalScore]};
    }
    return state;
}