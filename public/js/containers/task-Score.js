import {connect} from "react-redux";
import TaskScore from "../components/task-Score";


const mapStateToProps = (state)=> {
    return {
        allTask: state.taskScore.allTask,
        isUpdate: state.taskScore.isUpdate,
        isFind: state.taskScore.isFind,
        teams: state.weekScore.teams,
        zones: state.zone.zones,
        students: state.taskScore.students
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        selectData: (data)=> {
            dispatch({type: "SELECT_DATA", data});
        },
        getAllTask: ()=> {
            dispatch({type: "GETALL_TASK"});
        },
        onModify: (data)=> {
            dispatch({type: "MODIFY_TASK", data});
        },
        filterData: (data)=> {
            dispatch({type: "FILTER_TASK", data});
        },
        changeState: ()=> {
            dispatch({type: "CHANGE_STATE"});
        },
        getAllZones: () => {
            dispatch({type: 'GET_ALL_ZONES'});
        },
        selectTeam: (name) => {
            dispatch({type: 'SELECT_TEAM', name});
        },
        selectStudents: (zoneAndTeam) => {
            dispatch({type: 'SELECT_STUDENT_FOR_ZONE_TEAM', zoneAndTeam});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskScore);