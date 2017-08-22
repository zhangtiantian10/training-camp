import {connect} from "react-redux";
import TaskScore from "../components/task-Score";


const mapStateToProps = (state)=> {
    return {
          allTask:state.taskScore.allTask
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        selectData: (data)=> {
            dispatch({type: "SELECT_DATA", data});
        },
        getAllTask:()=>{
            dispatch({type:"GETALL_TASK"});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskScore);