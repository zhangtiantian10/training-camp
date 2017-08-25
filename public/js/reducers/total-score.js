module.exports = (state={totalScore:[],keys:[]},action)=>{
    if(action.type === "GET_ALL_SCORE"){
        state.totalScore = action.totalScore.allScore;
        state.keys = action.totalScore.keyArr;
        return Object.assign({},state)
    }
    return state;
}