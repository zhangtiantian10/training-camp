import React from 'react';
import Nav from '../containers/nav';

export default class Team extends React.Component {

    componentWillMount() {
        this.props.getAllZones();
        this.props.getAllTeams();
    }

    componentWillUpdate(nextProps) {
        if(nextProps.nameExist === true && nextProps.addSuccess === false) {
            alert('同一个战区小组名不能重复！');
            this.props.cancelState();
        } else if (nextProps.addSuccess === true) {
            alert('添加成功！');
            this.props.getAllTeams();
        } else if (nextProps.addSuccess === false && nextProps.nameExist === false) {
            alert('添加失败！');
            this.props.cancelState();
        }
    }

    addTeam() {
        const zoneName = $("#zone").val();
        const teamName = this.refs.teamName.value;

        if(!zone) {
            alert('战区不存在，请先添加战区！');
            return;
        }

        this.props.onAddTeam({zoneName, teamName});
    }

    render() {
        return <div>
            <Nav/>
            <div className="col-md-offset-2 col-md-8 tablePaddingTop">
                <div className="col-md-4">
                    <input type="text" className="form-control" ref="teamName" placeholder="小组名称"/>
                </div>
                <div className="col-md-4">
                    <select className="form-control" id="zone">
                        {this.props.zones.map((z, i) => {
                            return <option key={i} value={z.name} className="textStyle">
                                    {z.name}
                            </option>
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-default textStyle" onClick={this.addTeam.bind(this)}>添加</button>
                </div>
            </div>
            <div className="col-md-8 col-md-offset-2 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="textStyle col-md-2">小组名称</th>
                        <th className="textStyle col-md-2">战区</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.teams.map((z, i) => {
                        return <tr key={i}>
                            <td className="textStyle">{z.name}</td>
                            <td className="textStyle">{z.zone_name}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}