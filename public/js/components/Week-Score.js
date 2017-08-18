import React from 'react';
import Nav from '../containers/nav';

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
            <Nav/>
            <div className="col-md-offset-2 tablePaddingTop">
                <div className="col-md-2">
                    <select className="form-control textStyle" id="zone">
                        <option value="001" className="textStyle">001战区</option>
                        <option value="002" className="textStyle">002战区</option>
                        <option value="003" className="textStyle">003战区</option>
                        <option value="004" className="textStyle">004战区</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="team">
                        <option value="1" className="textStyle">一组</option>
                        <option value="2" className="textStyle">二组</option>
                        <option value="3" className="textStyle">三组</option>
                        <option value="4" className="textStyle">四组</option>
                        <option value="5" className="textStyle">五组</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.selectStudent.bind(this)}>查找</button>
                </div>
                <div className="col-md-2">
                    <select className="form-control textStyle" id="week">
                        {this.props.weeks.map((w, i) => {
                            return <option key={i} value={`${w.id}`} className="textStyle">
                                {w.week_code}
                            </option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle">提交</button>
                </div>
            </div>
            <div className="col-md-10 col-md-offset-1 tablePaddingTop">
                <table className="table table-bordered">
                    <thead>
                    <tr className="active">
                        <th className="col-md-1 textStyle">姓名</th>
                        <th className="col-md-1 textStyle">任务卡</th>
                        <th className="col-md-1 textStyle">成长日志</th>
                        <th className="col-md-1 textStyle">站会</th>
                        <th className="col-md-1 textStyle">体能大比拼</th>
                        <th className="col-md-1 textStyle">部落冲突</th>
                        <th className="col-md-1 textStyle">积极参与</th>
                        <th className="col-md-1 textStyle">总分</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map((s, i) => {
                        return <tr key={i}>
                            <td className="textStyle">{s.name}</td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                            <td className="cancelTdPadding"><input type="text" className="form-control cancelBorder"/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}