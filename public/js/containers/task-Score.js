import {connect} from "react-redux";
import TaskScore from "../components/task-Score";


const mapStateToProps = (state)=> {
    return {
        allTask: state.taskScore.allTask,
        isUpdate: state.taskScore.isUpdate,
        isFind:state.taskScore.isFind
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
        changeFindTaskState:()=>{
            dispatch({type:"CHANGE_TASK_STATE"})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskScore);