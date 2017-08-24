import {connect} from "react-redux";
import TaskCard from "../components/taskCard";

var mapStateToProps = (state) => {
    console.log(state.getAllTaskcard.taskcards);
    return {
        addStatus:state.taskcard.addStatus,
        taskcards:state.getAllTaskcard.taskcards
    }
}

var mapDispatchToProps = (dispatch) => {
    return{
        onAdd:(data)=>{
            dispatch({type:'ADD_TASKCARD',data})
        },
        reset:()=>{
            dispatch({type:'RESET_ADDSTATUS'})
        },
        getAllTaskcard:()=>{
            dispatch({type:'GET_ALL_TASKCARD'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskCard);