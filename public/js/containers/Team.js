import {connect} from 'react-redux';
import Team from '../components/Team';

const mapStateToProps = (state) => {
    return {
        zones: state.zone.zones,
        nameExist: state.team.nameExist,
        addSuccess: state.team.addSuccess,
        teams: state.team.teams
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllZones: () => {
            dispatch({type: 'GET_ALL_ZONES'});
        },
        onAddTeam: (team) => {
            dispatch({type: 'ADD_TEAM', team});
        },
        cancelState: () => {
            dispatch({type: 'CANCEL_STATE'});
        },
        getAllTeams: () => {
            dispatch({type: 'GET_ALL_TEAMS'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);