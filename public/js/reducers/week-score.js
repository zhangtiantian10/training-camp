module.exports = (state = {students: []}, action) => {
    if(action.type === 'SELECT_STUDENT_BACK') {
        state.students = action.students;
        return Object.assign({}, state);
    }

    return state;
}