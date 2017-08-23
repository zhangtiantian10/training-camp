import {connect} from 'react-redux';
import TotalScore from '../components/total-Score';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllScore:() => {
            dispatch({type:'GET_ALL_SCORE'})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TotalScore);