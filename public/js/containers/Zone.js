import {connect} from 'react-redux';
import Zone from '../components/Zone';

const mapStateToProps = (state) => {
    return {
        addSuccess: state.zone.addSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addZone: (zone) => {
            dispatch({type: 'ADD_ZONE', zone});
        },
        changeAddState: () => {
            dispatch({type: "CHANGE_ADD_STATE"})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Zone);