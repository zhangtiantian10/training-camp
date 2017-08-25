import {connect} from 'react-redux';
import Hello from '../components/student';

const mapStateToProps = (state) => {
    return {
        isSaved: state.student.isSaved,
        allStudent: state.student.allStudent,
        isRemoved: state.student.isRemoved,
        isModify: state.student.isModify,
        teams: state.weekScore.teams,
        zones: state.zone.zones
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllStudent: ()=> {
            dispatch({type: "GETALL_STUDENT"});
        },
        onSubmit: (data) => {
            dispatch({type: "ADD_STUDENT", data});
        },
        onSearch: (data)=> {
            dispatch({type: "SEARCH_ONE", data});
        },
        onModify: (data)=> {
            dispatch({type: "MODIFY_STUDENT", data});
        },
        changeState: () => {
            dispatch({type: "CHANGE_STATE"});
        },
        getAllZones: () => {
            dispatch({type: 'GET_ALL_ZONES'});
        },
        selectTeam: (name) => {
            dispatch({type: 'SELECT_TEAM', name});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);