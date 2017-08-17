import {connect} from 'react-redux';
import Hello from '../components/addStudent';

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        isSaved:state.student.isSaved
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            console.log(data);
            dispatch({type:"ADD_STUDENT",data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);