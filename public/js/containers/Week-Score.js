import {connect} from 'react-redux';
import WeekScore from '../components/Week-Score';

const mapStateToProps = (state) => {
    return {
        weeks: state.week.weeks,
        students: state.weekScore.students,
        weekScores: state.weekScore.weekScores,
        isUpdate: state.weekScore.isUpdate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllWeeks: () => {
            dispatch({type: 'GET_ALL_WEEKS'});
        },
        selectStudentScore: (data) => {
            dispatch({type: 'SELECT_STUDENT_SCORE', data});
        },
        updateWeekScores: (weekScores) => {
            dispatch({type: 'UPDATE_WEEK_SCORES', weekScores});
        },
        modifyUpdateState: () => {
            dispatch({type: 'MODIFY_UPDATE_STATE'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekScore);