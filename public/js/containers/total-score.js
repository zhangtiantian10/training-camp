import {connect} from 'react-redux';
import TotalScore from '../components/total-Score';

const mapStateToProps = (state) => {
    return {
        allTotalScore:state.totalScore.totalScore,
        keyArr:state.totalScore.keys,
        zones: state.zone.zones,
        weeks: state.week.weeks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllScore:() => {
            dispatch({type:'GET_ALL_SCORE'})
        },
        getAllZones: () => {
            dispatch({type: 'GET_ALL_ZONES'});
        },
        getAllWeeks: () => {
            dispatch({type: "GET_ALL_WEEKS"});
        },
        selectTotalScore: (data) => {
            dispatch({type: 'SELECT_TOTAL_SCORE', data});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TotalScore);