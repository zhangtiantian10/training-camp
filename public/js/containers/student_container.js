import {connect} from 'react-redux';
import Hello from '../components/student_component';

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        isSaved:state.student.isSaved,
        allStudent:state.student.allStudent,
        isRemoved:state.student.isRemoved,
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
        onRemove:(data)=>{
         dispatch({type:"REMOVE_STUDENT",data});
        },
        onSearch:(data)=>{
            console.log(data);
            dispatch({type:"SEARCH_ONE",data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);