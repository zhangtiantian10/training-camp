import React from 'react';
import Nav from '../containers/nav';

export default class WeekScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
            totalScore: 0
        };
    }

    componentDidMount() {
        this.props.getAllWeeks();
    }

    componentWillUpdate(nextProps) {
        if(nextProps.isUpdate === true) {
            alert('修改成功！');
            this.props.modifyUpdateState();
        } else if(nextProps.isUpdate === false) {
            alert('修改失败！');
            this.props.modifyUpdateState();
        }
    }

    selectStudent() {
        const zone=$("#zone").val();
        const team=$("#team").val();
        const week=$("#week").val();
        this.state.ids = [];
        this.props.selectStudentScore({zone, team, week: parseInt(week)});
    }

    addWeekScore() {
        const week=$("#week").val();
        const taskCards = document.getElementsByName('taskCard');
        const diarys = document.getElementsByName('diary');
        const standingMeetings = document.getElementsByName('standingMeeting');
        const tribalConflicts = document.getElementsByName('tribalConflict');
        const physicalCompetitions = document.getElementsByName('physicalCompetition');
        const positives = document.getElementsByName('positive');
        const totalScores = document.getElementsByName('totalScore');
        let weekScores = [];

        for (let i = 0; i < this.state.ids.length; i++){

            const taskCard = taskCards[i].value;
            const diary = diarys[i].value;
            const standingMeeting = standingMeetings[i].value;
            const tribalConflict = tribalConflicts[i].value;
            const physicalCompetition = physicalCompetitions[i].value;
            const positive = positives[i].value;
            const totalScore = totalScores[i].value;
            if(!taskCard || !diary || !standingMeeting || !tribalConflict || !physicalCompetition || !positive || totalScore === "NaN") {
                alert("信息不全或信息有误！");
                return ;
            }

            weekScores.push({
                id: this.state.ids[i],
                taskCard,
                diary,
                standingMeeting,
                tribalConflict,
                physicalCompetition,
                positive,
                totalScore
            });
        };

        this.props.updateWeekScores(weekScores);
    }

    countTotal() {
        const taskCards = document.getElementsByName('taskCard');
        const diarys = document.getElementsByName('diary');
        const standingMeetings = document.getElementsByName('standingMeeting');
        const tribalConflicts = document.getElementsByName('tribalConflict');
        const physicalCompetitions = document.getElementsByName('physicalCompetition');
        const positives = document.getElementsByName('positive');

        this.state.ids.forEach((id, i) => {
            const taskCard = taskCards[i].value ? taskCards[i].value : 0;
            const diary = diarys[i].value ? diarys[i].value : 0;
            const standingMeeting = standingMeetings[i].value ? standingMeetings[i].value : 0;
            const tribalConflict = tribalConflicts[i].value ? tribalConflicts[i].value : 0;
            const physicalCompetition = physicalCompetitions[i].value ? physicalCompetitions[i].value : 0;
            const positive = positives[i].value ? positives[i].value : 0;

            const total = parseInt(taskCard) + parseInt(diary) + parseInt(standingMeeting) + parseInt(tribalConflict) + parseInt(physicalCompetition) + parseInt(positive);
            document.getElementById(`totalScore${id}`).value = total;
        });

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
                    <button type="button" className="btn btn-default textStyle" onClick={this.addWeekScore.bind(this)}>提交</button>
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
                    {this.props.weekScores.map((s, i) => {
                        this.state.ids.push(s.id);
                        return <tr key={i}>
                            <td className="textStyle">{this.props.students[i].name}</td>
                            <td className="cancelTdPadding"><input type="text" name="taskCard" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={`${s.task_card}`}/></td>
                            <td className="cancelTdPadding"><input type="text" name="diary" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={`${s.diary}`}/></td>
                            <td className="cancelTdPadding"><input type="text" name="standingMeeting" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={`${s.standing_meeting}`}/></td>
                            <td className="cancelTdPadding"><input type="text" name="physicalCompetition" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={`${s.physical_competition}`}/></td>
                            <td className="cancelTdPadding"><input type="text" name="tribalConflict" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={s.tribal_conflict}/></td>
                            <td className="cancelTdPadding"><input type="text" name="positive" className="form-control cancelBorder" onChange={this.countTotal.bind(this)} defaultValue={`${s.positive}`}/></td>
                            <td className="cancelTdPadding"><input type="text" name="totalScore" className="form-control cancelBorder" id={`totalScore${s.id}`} defaultValue={`${s.total_score}`}/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}