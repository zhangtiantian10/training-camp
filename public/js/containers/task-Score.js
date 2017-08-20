import {connect} from "react-redux";
import TaskScore from "../components/task-Score";


const mapStateToProps = (state)=> {

    return {

    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        selectData: (data)=> {
            dispatch({type: "SELECT_DATA", data});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskScore);