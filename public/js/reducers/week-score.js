module.exports = (state = {weekScores: [], students: [], isUpdate: ""}, action) => {
    if(action.type === 'SELECT_STUDENT_BACK') {
        state.students = action.data.students;
        state.weekScores = action.data.weekScores;
        return Object.assign({}, state);
    } else if(action.type === 'UPDATE_WEEK_SCORES_BACK') {
        state.isUpdate = action.isSuccess;

        return Object.assign({}, state);
    } else if(action.type === 'MODIFY_UPDATE_STATE') {
        state.isUpdate = "";

        return Object.assign({}, state);
    }
    return state;
}