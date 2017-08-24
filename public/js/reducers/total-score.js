module.exports = (state={totalScore:[],keys:[]},action)=>{
    if(action.type === "GET_ALL_SCORE"){
        console.log('reducer',action.totalScore);
        state.totalScore = action.totalScore.allScore;
        state.keys = action.totalScore.keyArr;
        return Object.assign({},state)
    }
    return state;
}