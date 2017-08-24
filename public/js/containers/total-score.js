import {connect} from 'react-redux';
import TotalScore from '../components/total-Score';

const mapStateToProps = (state) => {
    console.log('allScore',state.totalScore.totalScore);
    return {
        allTotalScore:state.totalScore.totalScore
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