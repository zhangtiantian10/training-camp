import React from 'react';
import Nav from '../containers/nav';

export default class WeekScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
            totalScore: 0,
            weekScores: [],
            changeState: false,
            students: [],
        };
    }

    componentDidMount() {
        this.props.getAllWeeks();
        this.props.getAllZones();
    }

    componentWillUpdate(nextProps) {

        if(this.state.changeState) {
            this.state.changeState = false;
            this.setState({
                weekScores: nextProps.weekScores,
                students: nextProps.students
            });
        }

        if (nextProps.isUpdate === true) {
            alert('修改成功！');
            this.props.modifyUpdateState();
        } else if (nextProps.isUpdate === false) {
            alert('修改失败！');
            this.props.modifyUpdateState();
        }
    }

    selectStudent() {
        this.state.changeState = true;
        const zone = $("#zone").val();
        const team = $("#team").val();
        const week = $("#week").val();
        if (!zone || !team || !week) {
            alert('请选择正确的一项！');
            return;
        }
        this.state.ids = [];
        const weekSplit = week.split('-');
        const weekInfo = this.props.weeks.find(w => w.id === parseInt(weekSplit[0]));
        this.props.selectStudentScore({zone, team, weekId: parseInt(weekSplit[0]), startTime: weekInfo.start_date, endTime: weekInfo.end_date, cardNumber: weekInfo.card_number});
    }

    addWeekScore() {
        const week = $("#week").val();
        if(!week) {
            alert('请选择正确的一项！');
            return;
        }
        const weekScores = this.props.weekScores;

        this.props.updateWeekScores({weekScores, weekName: week.split('-')[1]});
    }

    countTotal(string, i, even) {
        this.props.weekScores[i][`${string}`] = even.target.value;
        const weekScore = this.props.weekScores[i];
        const taskCard = weekScore.task_card;
        const diary = weekScore.diary;
        const standingMeeting = weekScore.standing_meeting;
        const tribalConflict = weekScore.tribal_conflict;
        const physicalCompetition = weekScore.physical_competition;
        const positive = weekScore.positive;

        const total = parseInt(taskCard) + parseInt(diary) + parseInt(standingMeeting) + parseInt(tribalConflict) + parseInt(physicalCompetition) + parseInt(positive);
        this.props.weekScores[i].total_score = total ? total : 0;
        this.setState({
            weekScores: this.props.weekScores
        });
    }

    selectTeamForZone() {
        const zoneName = $('#zone').val();

        this.props.selectTeam(zoneName);
    }

    render() {
        return <div>
            <Nav/>
            <div className="col-md-offset-2 tablePaddingTop">
                <div className="col-md-2">
                    <select className="form-control textStyle" id="zone" onChange={this.selectTeamForZone.bind(this)}>
                        <option value="" className="textStyle">请选择</option>
                        {this.props.zones.map((z, i) => {
                            return <option key={i} className="textStyle" value={z.name}>{z.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" id="team">
                        <option value="" className="textStyle">请选择</option>
                        {this.props.teams.map((t, i) => {
                            return <option key={i} value={t.id} className="textStyle">{t.name}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control textStyle" id="week">
                        <option value="" className="textStyle">请选择</option>
                        {this.props.weeks.map((w, i) => {
                            return <option key={i} value={`${w.id}-${w.week_code}`} className="textStyle">
                                {w.week_code}
                            </option>
                        })}
                    </select>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.selectStudent.bind(this)}>
                        查找
                    </button>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-default textStyle" onClick={this.addWeekScore.bind(this)}>
                        提交
                    </button>
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
                    {this.state.weekScores.map((s, i) => {
                        this.state.ids.push(s.id);
                        return <tr key={i}>
                        <td className="textStyle">{this.state.students[i].name}</td>
                        <td className="cancelTdPadding"><input type="text" name="taskCard"
                        className="form-control cancelBorder"
                        value={s.task_card}/></td>
                        <td className="cancelTdPadding"><input type="text" name="diary"
                        className="form-control cancelBorder"
                        onChange={this.countTotal.bind(this, 'diary', i)}
                        value={s.diary}/></td>
                        <td className="cancelTdPadding"><input type="text" name="standingMeeting"
                        className="form-control cancelBorder"
                        onChange={this.countTotal.bind(this, 'standing_meeting', i)}
                        value={s.standing_meeting}/></td>
                        <td className="cancelTdPadding"><input type="text" name="physicalCompetition"
                        className="form-control cancelBorder"
                        onChange={this.countTotal.bind(this, 'physical_competition', i)}
                        value={s.physical_competition}/></td>
                        <td className="cancelTdPadding"><input type="text" name="tribalConflict"
                        className="form-control cancelBorder"
                        onChange={this.countTotal.bind(this, 'tribal_conflict', i)}
                        value={s.tribal_conflict}/></td>
                        <td className="cancelTdPadding"><input type="text" name="positive"
                        className="form-control cancelBorder"
                        onChange={this.countTotal.bind(this, 'positive', i)}
                        value={s.positive}/></td>
                        <td className="cancelTdPadding"><input type="text" name="totalScore"
                        className="form-control cancelBorder"
                        id={`totalScore${s.id}`}
                        value={s.total_score}/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>;
    }
}