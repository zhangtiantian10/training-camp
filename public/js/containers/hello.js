import {connect} from 'react-redux';
import Hello from '../components/addStudent';

const mapStateToProps = (state) => {
    return {
        content: state.hello.content
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHello: () => {
            dispatch({type: 'GET_CONTENT'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);