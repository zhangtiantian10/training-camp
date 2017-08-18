import React from 'react';

export default class WeekScore extends React.Component {

    componentDidMount() {
        this.props.getAllWeeks();
    }

    selectStudent() {
        const zone=$("#zone").val();
        const team=$("#team").val();
        const week=$("#week").val();

        console.log({zone, team, week: parseInt(week)});
        this.props.selectStudentScore({zone, team, week: parseInt(week)});
    }

    render() {
        return <div>
            <div className="col-md-2">
                <select className="form-control" id="zone">
                    <option value="001">001战区</option>
                    <option value="002">002战区</option>
                    <option value="003">003战区</option>
                    <option value="004">004战区</option>
                </select>
            </div>
            <div className="col-md-2">
                <select className="form-control" id="team">
                    <option value="1">一组</option>
                    <option value="2">二组</option>
                    <option value="3">三组</option>
                    <option value="4">四组</option>
                    <option value="5">五组</option>
                </select>
            </div>
            <div className="col-md-2">
                <select className="form-control" id="week">
                    {this.props.weeks.map((w, i) => {
                        return <option key={i} value={`${w.id}`}>
                                {w.week_code}
                        </option>
                    })}
                </select>
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-default" onClick={this.selectStudent.bind(this)}>确定</button>
            </div>
            <div className="col-md-10 col-md-offset-1">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="col-md-1">姓名</th>
                        <th className="col-md-1">任务卡</th>
                        <th className="col-md-1">成长日志</th>
                        <th className="col-md-1">站会</th>
                        <th className="col-md-1">体能大比拼</th>
                        <th className="col-md-1">部落冲突</th>
                        <th className="col-md-1">积极参与</th>
                        <th className="col-md-1">总分</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map((s, i) => {
                        return <tr key={i}>
                            <td>{s.name}</td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                            <td><input type="text" className="form-control"/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}