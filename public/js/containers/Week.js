import {connect} from 'react-redux';
import Week from '../components/Week';

const mapStateToProps = (state) => {
    return {
        addSuccess: state.week.addSuccess,
        weeks: state.week.weeks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (data) => {
            dispatch({type: "ADD_WEEK", data});
        },
        onModifyAddSuccess: () => {
            dispatch({type: "MODIFY_ADD_SUCCESS"});
        },
        getAllWeeks: () => {
            dispatch({type: "GET_ALL_WEEKS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);
