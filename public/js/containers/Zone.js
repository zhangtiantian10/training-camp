import {connect} from 'react-redux';
import Zone from '../components/Zone';

const mapStateToProps = (state) => {
    return {
        addSuccess: state.zone.addSuccess,
        zones: state.zone.zones,
        getSuccess: state.zone.getSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addZone: (zone) => {
            dispatch({type: 'ADD_ZONE', zone});
        },
        changeSuccess: () => {
            dispatch({type: "CHANG_STATE"})
        },
        getAllZones: () => {
            dispatch({type: "GET_ALL_ZONES"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Zone);