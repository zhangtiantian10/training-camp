import {connect} from "react-redux";
import TaskCard from "../components/taskCard";

var mapDispatchToProps = (dispatch) => {
    return{
        onAdd:(data)=>{
            dispatch({type:'ADD_TASKCARD',data})
    }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(TaskCard);