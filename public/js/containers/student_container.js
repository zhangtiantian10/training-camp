import {connect} from 'react-redux';
import Hello from '../components/student_component';

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        isSaved:state.student.isSaved,
        allStudent:state.student.allStudent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllStudent:()=>{
            dispatch({type:"GETALL_STUDENT"});
        },
        onSubmit: (data) => {
            dispatch({type:"ADD_STUDENT",data});
        },
        onRemove:(id)=>{
         dispatch({type:"REMOVE_STUDENT",id});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);