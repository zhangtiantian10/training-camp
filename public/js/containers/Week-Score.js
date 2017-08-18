import {connect} from 'react-redux';
import WeekScore from '../components/Week-Score';

const mapStateToProps = (state) => {
    return {
        weeks: state.week.weeks,
        students: state.weekScore.students
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllWeeks: () => {
            dispatch({type: 'GET_ALL_WEEKS'});
        },
        selectStudentScore: (data) => {
            dispatch({type: 'SELECT_STUDENT_SCORE', data});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekScore);